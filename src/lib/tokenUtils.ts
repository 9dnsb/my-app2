// src/lib/tokenUtils.ts
import { createHmac, randomBytes } from 'crypto'

export function generateToken(length: number = 32): string {
  return randomBytes(length).toString('hex')
}

export function isTokenExpired(expiryDate: Date | null): boolean {
  if (!expiryDate) return true
  return new Date() > expiryDate
}

export function createTokenExpiry(hoursValid: number = 24): Date {
  const expiryDate = new Date()
  expiryDate.setHours(expiryDate.getHours() + hoursValid)
  return expiryDate
}

// src/lib/tokenUtils.ts - Add function for secure, time-limited tokens

export function createSecureToken(userId: number, purpose: string): string {
  const timestamp = Date.now()
  const randomPart = randomBytes(16).toString('hex')
  const data = `${userId}:${purpose}:${timestamp}:${randomPart}`

  // Create HMAC signature using app secret
  const hmac = createHmac('sha256', process.env.NEXTAUTH_SECRET || '')
  hmac.update(data)
  const signature = hmac.digest('hex')

  return `${data}:${signature}`
}

export function verifySecureToken(
  token: string,
  purpose: string
): {
  valid: boolean
  userId?: number
  reason?: string
} {
  try {
    const parts = token.split(':')
    if (parts.length !== 5) {
      return { valid: false, reason: 'invalid-format' }
    }

    const [userIdStr, tokenPurpose, timestampStr, randomPart, signature] = parts

    // Verify purpose
    if (tokenPurpose !== purpose) {
      return { valid: false, reason: 'wrong-purpose' }
    }

    // Verify signature
    const data = `${userIdStr}:${tokenPurpose}:${timestampStr}:${randomPart}`
    const hmac = createHmac('sha256', process.env.NEXTAUTH_SECRET || '')
    hmac.update(data)
    const expectedSignature = hmac.digest('hex')

    if (signature !== expectedSignature) {
      return { valid: false, reason: 'invalid-signature' }
    }

    // Check expiry (24 hours)
    const timestamp = parseInt(timestampStr, 10)
    const now = Date.now()
    if (now - timestamp > 24 * 60 * 60 * 1000) {
      return { valid: false, reason: 'expired' }
    }

    return { valid: true, userId: parseInt(userIdStr, 10) }
  } catch {
    // Catch without using the error parameter
    return { valid: false, reason: 'parse-error' }
  }
}
