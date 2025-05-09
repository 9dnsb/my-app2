// src/components/EmailForm.tsx
'use client'

import FormField from '@/components/FormField'

interface EmailFormProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  disabled?: boolean
  placeholder?: string
  required?: boolean
}

export default function EmailForm({
  value,
  onChange,
  error,
  disabled = false,
  placeholder = 'your@email.com',
  required = true,
}: EmailFormProps) {
  return (
    <FormField
      label="Email"
      name="email"
      type="email"
      value={value}
      onChange={onChange}
      autoComplete="username"
      required={required}
      disabled={disabled}
      error={error}
      placeholder={placeholder}
    />
  )
}
