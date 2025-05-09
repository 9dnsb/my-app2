// src/components/PasswordStrengthMeter.tsx
'use client'

import { calculatePasswordStrength, getStrengthLabel } from '@/lib/validation'

interface PasswordStrengthMeterProps {
  password: string
}

export default function PasswordStrengthMeter({
  password,
}: PasswordStrengthMeterProps) {
  if (!password) return null

  const strength = calculatePasswordStrength(password)

  return (
    <div className="mt-1">
      <div className="h-1 flex rounded overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`flex-1 ${
              i < strength
                ? strength <= 1
                  ? 'bg-red-500'
                  : strength <= 2
                  ? 'bg-yellow-500'
                  : 'bg-green-500'
                : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
      <p className="text-xs mt-1">{getStrengthLabel(strength)}</p>
      <p className="text-xs text-gray-600 mt-1">
        Password must be at least 8 characters and include uppercase, lowercase,
        numbers, and special characters.
      </p>
    </div>
  )
}
