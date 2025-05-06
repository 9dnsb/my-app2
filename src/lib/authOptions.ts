import { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '@/lib/prisma'
import bcrypt from 'bcryptjs'

type UserWithPassword = {
  id: number
  name: string | null
  email: string
  hashedPassword: string
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })

        if (!user || !('hashedPassword' in user)) return null

        const typedUser = user as UserWithPassword

        const isValid = await bcrypt.compare(
          credentials.password,
          typedUser.hashedPassword
        )

        if (!isValid) return null

        return {
          id: String(typedUser.id),
          name: typedUser.name,
          email: typedUser.email,
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
}
