import bcrypt from 'bcryptjs'
import prisma from '@/lib/prisma'
import { UserType } from '@/app/generated/prisma'
import { generateToken, createTokenExpiry } from '@/lib/tokenUtils'
import { sendVerificationEmail } from '@/lib/emailService'
import {
  isValidEmail,
  isValidPassword,
  normalizeEmail,
  sanitizeName,
} from '@/lib/validation'
import {
  createErrorResponse,
  createSuccessResponse,
  simulateWork,
  logApiError,
} from '@/lib/apiUtils'

export async function POST(req: Request) {
  // Track execution time
  const startTime = Date.now()

  try {
    // Ensure Content-Type is application/json
    if (req.headers.get('content-type') !== 'application/json') {
      return createErrorResponse('Invalid content type', 400)
    }

    const body = await req.json()
    const { email, name, password } = body

    // Input presence validation
    if (
      !email ||
      !password ||
      typeof email !== 'string' ||
      typeof password !== 'string'
    ) {
      return createErrorResponse('Missing or invalid fields', 400)
    }

    // Normalize and validate email
    const normalizedEmail = normalizeEmail(email)
    if (!isValidEmail(normalizedEmail)) {
      return createErrorResponse('Invalid email format', 400)
    }

    // Validate password strength
    const passwordValidation = isValidPassword(password)
    if (!passwordValidation.valid) {
      return createErrorResponse(
        passwordValidation.message || 'Invalid password',
        400
      )
    }

    // Sanitize and validate name
    const sanitizedName = sanitizeName(name)

    // Check for existing user (but avoid enumeration)
    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    })

    // Hash password with proper cost factor
    const hashedPassword = await bcrypt.hash(password, 12)

    // User doesn't exist - create new user
    if (!existingUser) {
      // Generate verification token and expiry
      const verificationToken = generateToken()
      const verificationTokenExpiry = createTokenExpiry(24) // 24 hours

      // Create user with verification token
      await prisma.user.create({
        data: {
          email: normalizedEmail,
          name: sanitizedName,
          hashedPassword,
          type: UserType.user,
          verificationToken,
          verificationTokenExpiry,
        },
      })

      // Send verification email
      await sendVerificationEmail(
        normalizedEmail,
        verificationToken,
        sanitizedName
      )

      // Log successful registration
      console.info(`User registered successfully, verification email sent`, {
        email: normalizedEmail,
        timestamp: new Date().toISOString(),
      })
    }

    // Add deliberate delay to make timing attacks harder
    await simulateWork()

    // Return success with verification instructions
    return createSuccessResponse({
      message:
        'Registration request processed. Please check your email to verify your account.',
    })
  } catch (error) {
    // Log error safely
    logApiError('registration', error, startTime)

    // Wait a bit to prevent timing attacks
    await simulateWork()

    return createErrorResponse('Internal server error', 500)
  }
}
