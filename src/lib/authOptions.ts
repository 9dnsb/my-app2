import { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { isValidEmail, isValidPassword } from '@/lib/validation'

// Ensure NEXTAUTH_SECRET is set
if (!process.env.NEXTAUTH_SECRET) {
  throw new Error('NEXTAUTH_SECRET environment variable is not set')
}

// Define a more specific type for our user with type information
interface UserWithType {
  id: string
  name?: string | null
  email?: string | null
  type?: string
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 hours
  },
  // Explicit JWT configuration
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 24 * 60 * 60, // 24 hours - match session maxAge
  },
  callbacks: {
    async jwt({ token, user }) {
      // Add user type to token when user object is available
      if (user) {
        const userWithType = user as UserWithType
        if (userWithType.type) {
          token.userType = userWithType.type
        }
      }
      return token
    },
    async session({ session, token }) {
      // Add user type to session from token
      if (token.userType && session.user) {
        session.user.type = token.userType
      }
      return session
    },
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

        // Email validation using our utility
        if (!isValidEmail(credentials.email)) return null

        // Password validation
        const passwordCheck = isValidPassword(credentials.password)
        if (!passwordCheck.valid) return null

        try {
          // Add emailVerified to the selected fields
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
            select: {
              id: true,
              email: true,
              name: true,
              hashedPassword: true,
              type: true,
              emailVerified: true, // Add this field
            },
          })

          if (!user || !user.hashedPassword) {
            console.warn(
              `Login attempt with invalid email: ${credentials.email}`
            )
            return null
          }

          const isValid = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          )

          if (!isValid) {
            console.warn(`Failed login attempt for user: ${credentials.email}`)
            return null
          }

          // Check if email is verified
          if (!user.emailVerified) {
            console.warn(
              `Login attempt with unverified email: ${credentials.email}`
            )
            throw new Error('email-not-verified')
          }

          // Log successful login
          console.info(`Successful login: ${user.email} (${user.type})`)

          // Return user with type information
          return {
            id: String(user.id),
            name: user.name,
            email: user.email,
            type: user.type,
          }
        } catch (error) {
          // If it's our custom error, rethrow it
          if (
            error instanceof Error &&
            error.message === 'email-not-verified'
          ) {
            throw error
          }

          console.error('Authentication error:', error)
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
  },
  // Enable debug logs in development only
  debug: process.env.NODE_ENV === 'development',
}
