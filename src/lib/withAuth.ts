// src/lib/withAuth.ts
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'
import { redirect } from 'next/navigation'

export type AuthOptions = {
  requiredRole?: 'admin' | 'user'
}

/**
 * Higher-order function for page protection and role validation
 *
 * @param options - Configuration options
 * @returns - The session if authenticated, otherwise redirects
 */
export async function withAuth(options: AuthOptions = {}) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user?.email) {
    return redirect('/auth/login')
  }

  // You already injected 'type' into session.user via callbacks
  if (options.requiredRole) {
    if (session.user.type !== options.requiredRole) {
      console.warn(
        `Access denied: Expected ${options.requiredRole}, got ${session.user.type}`
      )
      return redirect('/auth/login') // or '/unauthorized'
    }
  }

  return session
}
