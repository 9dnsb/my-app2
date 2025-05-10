import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { auth } from '@/auth'

export async function POST(req: NextRequest) {
  try {
    const session = await auth()

    if (!session?.user?.email) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const { cards } = body

    if (!Array.isArray(cards) || cards.length === 0) {
      return NextResponse.json(
        { message: 'Invalid form data' },
        { status: 400 }
      )
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { id: true },
    })

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }

    const submission = await prisma.submission.create({
      data: {
        userId: user.id,
        formName: 'creditCards',
        data: cards,
      },
    })

    return NextResponse.json({
      message: 'Submission saved successfully',
      submissionId: submission.id,
    })
  } catch (error) {
    console.error('Error saving credit card submission:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
