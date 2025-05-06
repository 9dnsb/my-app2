import { PrismaClient, UserType } from '@/app/generated/prisma'

const prisma = new PrismaClient()

export async function getUsersByType(type: UserType) {
  return await prisma.user.findMany({
    where: { type },
    orderBy: { id: 'asc' },
  })
}
