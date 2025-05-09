import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { message: 'Invalid email', type: 'user' },
        { status: 400 }
      )
    }

    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
      select: { type: true },
    })

    // Return user type if found, or default to user
    return NextResponse.json({
      type: user?.type || 'user',
    })
  } catch (error) {
    console.error('Error checking user type:', error)
    // If there's an error, default to user type
    return NextResponse.json({ type: 'user' })
  }
}
