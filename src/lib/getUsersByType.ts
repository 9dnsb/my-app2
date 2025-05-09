import { UserType } from '@/app/generated/prisma'
import prisma from '@/lib/prisma'

export async function getUsersByType(type: UserType) {
  return await prisma.user.findMany({
    where: { type },
    orderBy: { id: 'asc' },
  })
}
