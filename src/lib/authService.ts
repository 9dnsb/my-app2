// src/lib/authService.ts

import { signIn } from 'next-auth/react'
import { normalizeEmail } from './validation'

/**
 * Handles login with credentials
 */
export async function loginWithCredentials(
  email: string,
  password: string,
  remember: boolean = false
) {
  const sanitizedEmail = normalizeEmail(email)

  const result = await signIn('credentials', {
    email: sanitizedEmail,
    password,
    remember,
    redirect: false,
  })

  return result
}

/**
 * Determines redirect destination based on user type
 */
export async function getUserRedirectDestination(
  email: string
): Promise<string> {
  try {
    const sanitizedEmail = normalizeEmail(email)

    const response = await fetch('/api/auth/check-user-type', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: sanitizedEmail }),
    })

    if (response.ok) {
      const { type } = await response.json()
      return type === 'admin' ? '/admin' : '/dashboard'
    }

    return '/dashboard' // Default fallback
  } catch (error) {
    console.error('Error checking user type:', error)
    return '/dashboard' // Default fallback on error
  }
}
