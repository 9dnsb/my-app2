// src/lib/actions/financialProfileActions.ts
'use server'

import prisma from '@/lib/prisma'
import { auth } from '@/auth'

export async function createFinancialProfile() {
  const session = await auth()

  if (!session?.user?.email) {
    throw new Error('Unauthorized')
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { id: true, incomeProfile: true },
  })

  if (!user) {
    throw new Error('User not found')
  }

  if (user.incomeProfile) {
    throw new Error('Financial profile already exists')
  }

  await prisma.incomeProfile.create({
    data: {
      userId: user.id,
    },
  })
}
