// src/lib/tokenUtils.ts
import { randomBytes } from 'crypto'

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
