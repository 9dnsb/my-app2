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
      async authorize(credentials, req) {
        const ip =
          req?.headers?.['x-forwarded-for']?.split(',')[0]?.trim() ?? 'unknown'
        const email = credentials?.email ?? 'unknown'

        if (!credentials?.email || !credentials?.password) {
          console.warn(
            `[LOGIN FAIL] Missing fields - IP: ${ip} | Email: ${email}`
          )
          return null
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })

        if (!user || !('hashedPassword' in user)) {
          console.warn(
            `[LOGIN FAIL] User not found or missing hash - IP: ${ip} | Email: ${email}`
          )
          return null
        }

        const typedUser = user as UserWithPassword

        const isValid = await bcrypt.compare(
          credentials.password,
          typedUser.hashedPassword
        )

        if (!isValid) {
          console.warn(
            `[LOGIN FAIL] Invalid password - IP: ${ip} | Email: ${email}`
          )
          return null
        }

        // ✅ Successful login
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
