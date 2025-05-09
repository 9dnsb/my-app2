import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { generateToken, createTokenExpiry } from '@/lib/tokenUtils'
import { sendVerificationEmail } from '@/lib/emailService'

export async function POST(req: Request) {
  try {
    // Get email from request
    const { email } = await req.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      )
    }

    const normalizedEmail = email.trim().toLowerCase()

    // Find user
    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    })

    // For security, don't reveal if the email exists
    if (!user || user.emailVerified) {
      // Simulate work for consistent timing
      await new Promise((resolve) =>
        setTimeout(resolve, 500 + Math.random() * 500)
      )

      return NextResponse.json(
        {
          message:
            'If your email exists and is not verified, a new verification email has been sent.',
        },
        { status: 200 }
      )
    }

    // Rate limiting: Check when the last token was created
    if (
      user.verificationTokenExpiry &&
      new Date(user.verificationTokenExpiry).getTime() >
        Date.now() - 5 * 60 * 1000 // 5 minutes ago
    ) {
      return NextResponse.json(
        {
          message:
            'Please wait a few minutes before requesting another verification email.',
        },
        { status: 429 }
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

    return NextResponse.json(
      { message: 'Verification email sent. Please check your inbox.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Resend verification error:', error)
    return NextResponse.json(
      { message: 'An error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
