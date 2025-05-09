// src/lib/authVerificationService.ts
/**
 * Sends verification email resend request
 */
export async function resendVerificationEmail(email: string): Promise<string> {
  const res = await fetch('/api/auth/resend-verification', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || 'An error occurred. Please try again.')
  }

  return data.message
}
