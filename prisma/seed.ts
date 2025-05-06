import { PrismaClient, UserType } from '../src/app/generated/prisma'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const password = 'password123'
  const hashed = await bcrypt.hash(password, 10)

  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin',
      type: UserType.admin,
      hashedPassword: hashed,
    },
  })

  const user = await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      email: 'user@example.com',
      name: 'Regular User',
      type: UserType.user,
      hashedPassword: hashed,
    },
  })

  await prisma.post.upsert({
    where: { id: 1 }, // assumes post ID 1 is safe
    update: {},
    create: {
      title: 'Welcome Post',
      content: 'This is a sample post by Admin.',
      published: true,
      authorId: admin.id,
    },
  })

  await prisma.submission.upsert({
    where: { id: 1 }, // assumes submission ID 1 is safe
    update: {},
    create: {
      userId: user.id,
      formName: 'ContactForm',
      data: {
        message: 'Hello world',
        email: user.email,
      },
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
