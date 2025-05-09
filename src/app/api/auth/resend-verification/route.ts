// src/app/api/auth/resend-verification/route.ts
import prisma from '@/lib/prisma'
import { generateToken, createTokenExpiry } from '@/lib/tokenUtils'
import { sendVerificationEmail } from '@/lib/emailService'
import { normalizeEmail, isValidEmail } from '@/lib/validation'
import {
  createErrorResponse,
  createSuccessResponse,
  simulateWork,
  createApiHandler,
} from '@/lib/apiUtils'
import { checkRateLimit } from '@/lib/rateLimit'

export const POST = createApiHandler(async (req: Request) => {
  // Get IP address for rate limiting
  const forwardedFor = req.headers.get('x-forwarded-for')
  const ip = forwardedFor?.split(',')[0]?.trim() ?? 'unknown'

  // Check rate limit
  const rateLimitResult = await checkRateLimit(ip, 'auth')
  if (!rateLimitResult.success) {
    return createErrorResponse(
      'Too many requests. Please try again later.',
      429
    )
  }

  // Get email from request
  const { email } = await req.json()

  if (!email || typeof email !== 'string') {
    return createErrorResponse('Email is required', 400)
  }

  const normalizedEmail = normalizeEmail(email)

  // Validate email format
  if (!isValidEmail(normalizedEmail)) {
    return createErrorResponse('Invalid email format', 400)
  }

  // Find user
  const user = await prisma.user.findUnique({
    where: { email: normalizedEmail },
  })

  // For security, don't reveal if the email exists
  if (!user || user.emailVerified) {
    // Simulate work for consistent timing
    await simulateWork()

    return createSuccessResponse({
      message:
        'If your email exists and is not verified, a new verification email has been sent.',
    })
  }

  // Rate limiting: Check when the last token was created
  if (
    user.verificationTokenExpiry &&
    new Date(user.verificationTokenExpiry).getTime() >
      Date.now() - 5 * 60 * 1000 // 5 minutes ago
  ) {
    return createErrorResponse(
      'Please wait a few minutes before requesting another verification email.',
      429
    )
  }

  // Create new token
  const verificationToken = generateToken()
  const verificationTokenExpiry = createTokenExpiry(24)

  // Update user
  await prisma.user.update({
    where: { id: user.id },
    data: {
      verificationToken,
      verificationTokenExpiry,
    },
  })

  // Send email
  await sendVerificationEmail(normalizedEmail, verificationToken, user.name)

  return createSuccessResponse({
    message: 'Verification email sent. Please check your inbox.',
  })
})
