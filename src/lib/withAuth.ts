// src/lib/withAuth.ts
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export type WithAuthOptions = {
  requiredRole?: 'admin' | 'user'
}

/**
 * Generic auth guard
 */
export async function withAuth(options: WithAuthOptions = {}) {
  const session = await auth()

  if (!session || !session.user?.email) {
    return redirect('/auth/login')
  }

  if (options.requiredRole) {
    if (session.user.type !== options.requiredRole) {
      console.warn(
        `Access denied: Expected ${options.requiredRole}, got ${session.user.type}`
      )
      return redirect('/auth/login')
    }
  }

  return session
}

/**
 * Shortcut for requiring admin role
 */
export async function requireAdmin() {
  return withAuth({ requiredRole: 'admin' })
}

/**
 * Shortcut for requiring user role
 */
export async function requireUser() {
  return withAuth({ requiredRole: 'user' })
}
