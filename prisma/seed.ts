import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Create an example user
  const user = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      hashedPassword: 'yourhashedpasswordhere',
      type: 'admin',
      name: 'Admin User',
    },
  })

  // Optionally create an IncomeProfile for that user
  await prisma.incomeProfile.upsert({
    where: { userId: user.id },
    update: {},
    create: {
      userId: user.id,
    },
  })

  console.log('✅ Seeding completed.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
