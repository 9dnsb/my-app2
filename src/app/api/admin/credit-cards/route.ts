import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import prisma from '@/lib/prisma'

export async function GET() {
  const session = await auth()

  if (!session?.user || session.user.type !== 'admin') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const creditCards = await prisma.creditCard.findMany({
    include: {
      user: {
        select: { email: true },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return NextResponse.json({
    creditCards: creditCards.map((card) => ({
      id: card.id,
      userEmail: card.user.email,
      cardName: card.cardName,
      bankName: card.bankName,
      balance: card.balance,
      interestRate: card.interestRate,
      createdAt: card.createdAt,
    })),
  })
}
