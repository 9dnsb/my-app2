import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/lib/prisma'
import { isTokenExpired } from '@/lib/tokenUtils'

export async function GET(request: NextRequest) {
  try {
    // Get token from query parameters
    const searchParams = request.nextUrl.searchParams
    const token = searchParams.get('token')

    if (!token) {
      console.error('Verification failed: No token provided')
      return NextResponse.redirect(
        new URL('/auth/verification-error?error=missing-token', request.url)
      )
    }

    // Find user with matching token
    const user = await prisma.user.findFirst({
      where: {
        verificationToken: token,
      },
    })

    if (!user) {
      console.error('Verification failed: Invalid token')
      return NextResponse.redirect(
        new URL('/auth/verification-error?error=invalid-token', request.url)
      )
    }

    // Check if token is expired using the imported function
    if (isTokenExpired(user.verificationTokenExpiry)) {
      console.error('Verification failed: Token expired')
      return NextResponse.redirect(
        new URL('/auth/verification-error?error=expired-token', request.url)
      )
    }

    // Update user
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        emailVerified: new Date(), // Set verification timestamp
        verificationToken: null, // Clear token
        verificationTokenExpiry: null, // Clear expiry
      },
    })

    console.log(`Email verified successfully for: ${user.email}`)

    // Redirect to verification success page
    return NextResponse.redirect(
      new URL('/auth/verification-success', request.url)
    )
  } catch (error) {
    console.error('Verification error:', error)
    return NextResponse.redirect(
      new URL('/auth/verification-error?error=server-error', request.url)
    )
  }
}
