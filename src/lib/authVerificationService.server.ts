// src/lib/authVerificationService.server.ts
import prisma from '@/lib/prisma'
import { normalizeEmail, isValidEmail } from '@/lib/validation'
import {
  simulateWork,
  createErrorResponse,
  createSuccessResponse,
} from '@/lib/apiUtils'
import { generateToken, createTokenExpiry } from '@/lib/tokenUtils'
import { sendVerificationEmail } from '@/lib/emailService.server'

export async function handleVerificationResend({
  email,
  throttleMinutes = 5,
}: {
  email: string
  throttleMinutes?: number
}) {
  const normalizedEmail = normalizeEmail(email)

  if (!isValidEmail(normalizedEmail)) {
    return createErrorResponse('Invalid email format', 400)
  }

  const user = await prisma.user.findUnique({
    where: { email: normalizedEmail },
  })

  if (!user || user.emailVerified) {
    await simulateWork()
    return createSuccessResponse({
      message:
        'If your email exists and is not verified, a new verification email has been sent.',
    })
  }

  if (
    user.verificationTokenExpiry &&
    new Date(user.verificationTokenExpiry).getTime() >
      Date.now() - throttleMinutes * 60 * 1000
  ) {
    return createErrorResponse(
      'Please wait a few minutes before requesting another verification email.',
      429
    )
  }

  const verificationToken = generateToken()
  const verificationTokenExpiry = createTokenExpiry(24)

  await prisma.user.update({
    where: { id: user.id },
    data: {
      verificationToken,
      verificationTokenExpiry,
    },
  })

  await sendVerificationEmail(normalizedEmail, verificationToken, user.name)

  return createSuccessResponse({
    message: 'Verification email sent. Please check your inbox.',
  })
}
