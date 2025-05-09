// src/lib/withAuth.ts
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'
import { UserType } from '@/app/generated/prisma'

export type AuthOptions = {
  requiredRole?: UserType
}

/**
 * Higher-order function for page protection and role validation
 *
 * @param options - Configuration options
 * @returns - The session if authenticated, otherwise redirects
 */
export async function withAuth(options: AuthOptions = {}) {
  // Get the current session
  const session = await getServerSession(authOptions)

  // If no session, redirect to login
  if (!session || !session.user?.email) {
    return redirect('/auth/login')
  }

  // If role requirements are specified, check them
  if (options.requiredRole) {
    try {
      // Check user role
      const user = await prisma.user.findUnique({
        where: { email: session.user.email },
        select: { type: true },
      })

      // If user doesn't exist or doesn't have required role, redirect
      if (!user || user.type !== options.requiredRole) {
        // Redirect based on role
        if (user?.type === UserType.admin) {
          return redirect('/admin')
        } else {
          return redirect('/dashboard')
        }
      }
    } catch (error) {
      console.error('Error checking user role:', error)
      return redirect('/dashboard')
    }
  }

  // Return the session for use in the page
  return session
}
