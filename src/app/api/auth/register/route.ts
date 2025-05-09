import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import prisma from '@/lib/prisma'
import { UserType } from '@/app/generated/prisma'
import { generateToken, createTokenExpiry } from '@/lib/tokenUtils'
import { sendVerificationEmail } from '@/lib/emailService'

// Constants
const PASSWORD_MIN_LENGTH = 8
const NAME_MAX_LENGTH = 100
const EMAIL_MAX_LENGTH = 255

export async function POST(req: Request) {
  // Add a timestamp at function start for measuring execution time
  const startTime = Date.now()

  try {
    // ✅ Ensure Content-Type is application/json
    if (req.headers.get('content-type') !== 'application/json') {
      return createErrorResponse('Invalid content type', 400)
    }

    const body = await req.json()
    const { email, name, password } = body

    // ✅ Input presence validation
    if (
      !email ||
      !password ||
      typeof email !== 'string' ||
      typeof password !== 'string'
    ) {
      return createErrorResponse('Missing or invalid fields', 400)
    }

    // ✅ Normalize and validate email format
    // More comprehensive email regex
    const normalizedEmail = email.toLowerCase().trim()
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    if (
      !emailRegex.test(normalizedEmail) ||
      normalizedEmail.length > EMAIL_MAX_LENGTH
    ) {
      return createErrorResponse('Invalid email format', 400)
    }

    // ✅ Enhanced password strength validation
    if (password.length < PASSWORD_MIN_LENGTH) {
      return createErrorResponse('Password must be at least 8 characters', 400)
    }

    // Add more complex password validation
    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasNumbers = /\d/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

    if (!(hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar)) {
      return createErrorResponse(
        'Password must include uppercase, lowercase, numbers, and special characters',
        400
      )
    }

    // ✅ Better name validation (if provided)
    let sanitizedName = null
    if (name !== undefined) {
      if (typeof name !== 'string') {
        return createErrorResponse('Invalid name format', 400)
      }

      sanitizedName = name.trim()

      // Prevent excessively long names
      if (sanitizedName.length > NAME_MAX_LENGTH) {
        return createErrorResponse('Name is too long', 400)
      }

      // If trimmed name is empty, set to null
      if (sanitizedName === '') {
        sanitizedName = null
      }
    }

    // ✅ Check for existing user (but avoid enumeration)
    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    })

    // ✅ Hash password with proper cost factor
    const hashedPassword = await bcrypt.hash(password, 12) // Increased from 10 to 12 for better security

    // User doesn't exist - create new user
    if (!existingUser) {
      // Generate verification token and expiry
      const verificationToken = generateToken()
      const verificationTokenExpiry = createTokenExpiry(24) // 24 hours validity

      // Create user with verification token
      await prisma.user.create({
        data: {
          email: normalizedEmail,
          name: sanitizedName,
          hashedPassword,
          type: UserType.user,
          // New verification fields
          verificationToken,
          verificationTokenExpiry,
          // emailVerified remains null until verified
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

    // Important: Return the same response regardless of whether user existed
    // This prevents timing attacks for user enumeration

    // Add deliberate delay to make timing attacks harder
    await simulateWork()

    // Return success with verification instructions
    return NextResponse.json(
      {
        message:
          'Registration request processed. Please check your email to verify your account.',
      },
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'X-Content-Type-Options': 'nosniff',
          'Cache-Control': 'no-store, max-age=0',
        },
      }
    )
  } catch (error) {
    // Safer error logging for production
    const errorObj: Record<string, unknown> = {
      message: (error as Error)?.message,
      timestamp: new Date().toISOString(),
      timeSpent: Date.now() - startTime,
    }

    // Only include stack trace in development
    if (process.env.NODE_ENV !== 'production') {
      errorObj.stack = (error as Error)?.stack
    }

    console.error('Registration error:', errorObj)

    // Wait a bit to prevent timing attacks
    await simulateWork()

    return createErrorResponse('Internal server error', 500)
  }
}

// Helper function to create consistent error responses
function createErrorResponse(message: string, status: number): NextResponse {
  return NextResponse.json(
    { message },
    {
      status,
      headers: {
        'Content-Type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'Cache-Control': 'no-store, max-age=0',
      },
    }
  )
}

// Helper function to add slight delay to prevent timing attacks
async function simulateWork(): Promise<void> {
  return new Promise((resolve) =>
    setTimeout(resolve, 100 + Math.floor(Math.random() * 150))
  )
}
