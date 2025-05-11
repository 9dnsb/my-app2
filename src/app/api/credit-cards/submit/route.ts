import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { auth } from '@/auth'

type CreditCardInput = {
  cardName: string
  bankName: string
  balance: number
  interestRate: number
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth()

    if (!session?.user?.email) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const { cards } = body as { cards: CreditCardInput[] }

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

    await prisma.$transaction(
      cards.map((card: CreditCardInput) =>
        prisma.creditCard.create({
          data: {
            userId: user.id,
            cardName: card.cardName,
            bankName: card.bankName,
            balance: card.balance,
            interestRate: card.interestRate,
          },
        })
      )
    )

    return NextResponse.json({
      message: 'Credit cards saved successfully',
    })
  } catch (error) {
    console.error('Error saving credit card submission:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
