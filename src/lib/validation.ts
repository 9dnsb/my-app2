// src/lib/validation.ts

// Constants for validation
export const PASSWORD_MIN_LENGTH = 8
export const NAME_MAX_LENGTH = 100
export const EMAIL_MAX_LENGTH = 255

/**
 * Validates email format
 */
export function isValidEmail(email: string): boolean {
  const normalizedEmail = email.toLowerCase().trim()
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  
  return emailRegex.test(normalizedEmail) && 
         normalizedEmail.length <= EMAIL_MAX_LENGTH
}

/**
 * Validates password strength
 */
export function isValidPassword(password: string): { valid: boolean; message?: string } {
  if (password.length < PASSWORD_MIN_LENGTH) {
    return { 
      valid: false, 
      message: `Password must be at least ${PASSWORD_MIN_LENGTH} characters` 
    }
  }

  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasNumbers = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

  if (!hasUpperCase) {
    return { 
      valid: false, 
      message: 'Password must contain at least one uppercase letter' 
    }
  }
  
  if (!hasLowerCase) {
    return { 
      valid: false, 
      message: 'Password must contain at least one lowercase letter' 
    }
  }
  
  if (!hasNumbers) {
    return { 
      valid: false, 
      message: 'Password must contain at least one number' 
    }
  }
  
  if (!hasSpecialChar) {
    return { 
      valid: false, 
      message: 'Password must contain at least one special character' 
    }
  }

  return { valid: true }
}

/**
 * Calculates password strength score (0-5)
 */
export function calculatePasswordStrength(password: string): number {
  if (!password) return 0

  let score = 0

  // Length check
  if (password.length >= 8) score += 1
  if (password.length >= 12) score += 1

  // Complexity checks
  if (/[A-Z]/.test(password)) score += 1
  if (/[a-z]/.test(password)) score += 1
  if (/[0-9]/.test(password)) score += 1
  if (/[^A-Za-z0-9]/.test(password)) score += 1

  return Math.min(5, score)
}

/**
 * Returns password strength label based on score
 */
export function getStrengthLabel(strength: number): string {
  return ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong', 'Very Strong'][strength]
}

/**
 * Normalizes and sanitizes an email address
 */
export function normalizeEmail(email: string): string {
  return email.toLowerCase().trim()
}

/**
 * Sanitizes username/name input
 */
export function sanitizeName(name: string | undefined | null): string | null {
  if (name === undefined || name === null) {
    return null
  }

  const trimmedName = name.trim()
  
  if (trimmedName === '' || trimmedName.length > NAME_MAX_LENGTH) {
    return null
  }
  
  return trimmedName
}
