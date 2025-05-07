import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    // ✅ Ensure Content-Type is application/json
    if (req.headers.get('content-type') !== 'application/json') {
      return NextResponse.json(
        { message: 'Invalid content type' },
        { status: 400 }
      )
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
      return NextResponse.json(
        { message: 'Missing or invalid fields' },
        { status: 400 }
      )
    }

    // ✅ Normalize and validate email format
    const normalizedEmail = email.toLowerCase().trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(normalizedEmail)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      )
    }

    // ✅ Enforce password strength
    if (password.length < 8) {
      return NextResponse.json(
        { message: 'Password must be at least 8 characters' },
        { status: 400 }
      )
    }

    // ✅ Check for existing user (but avoid enumeration)
    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    })

    if (existingUser) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 400 }
      ) // Generic
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await prisma.user.create({
      data: {
        email: normalizedEmail,
        name: name?.trim() || null,
        hashedPassword,
      },
    })

    return NextResponse.json({ message: 'User created' }, { status: 201 })
  } catch (error) {
    console.error('❌ Registration error:', {
      error: (error as Error)?.message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
