// src/app/auth/register/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useForm } from '@/hooks/useForm'
import { validateRegistrationForm } from '@/lib/validation'
import FormField from '@/components/FormField'
import Button from '@/components/Button'
import Alert from '@/components/Alert'
import AuthLayout from '@/components/AuthLayout'
import PasswordStrengthMeter from '@/components/PasswordStrengthMeter'

// Add index signature to satisfy Record<string, unknown> constraint
interface RegisterFormValues {
  name: string
  email: string
  password: string
  confirmPassword: string
  termsAccepted: boolean
  [key: string]: unknown // Add index signature
}

export default function RegisterPage() {
  const router = useRouter()

  // Form submission handler
  const handleSubmit = async (values: RegisterFormValues) => {
    const sanitizedData = {
      name: values.name.trim(),
      email: values.email.trim().toLowerCase(),
      password: values.password,
    }

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(sanitizedData),
      headers: { 'Content-Type': 'application/json' },
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.message || 'Registration failed. Please try again.')
    }

    // Registration successful
    router.push('/auth/login?registered=true')
  }

  // Use our custom form hook
  const {
    values,
    errors,
    isSubmitting,
    submitError,
    handleChange,
    handleSubmit: onSubmit,
  } = useForm<RegisterFormValues>(
    {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsAccepted: false,
    },
    validateRegistrationForm,
    handleSubmit
  )

  return (
    <AuthLayout title="Create an Account">
      {submitError && <Alert type="error" message={submitError} />}

      <form onSubmit={onSubmit} className="space-y-4">
        <FormField
          label="Name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          placeholder="Your name"
          error={errors.name}
        />

        <FormField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
          autoComplete="email"
          error={errors.email}
        />

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Create a password"
            required
            autoComplete="new-password"
            className={`w-full border p-2 rounded ${
              errors.password ? 'border-red-500' : ''
            }`}
            aria-invalid={errors.password ? 'true' : 'false'}
          />
          {errors.password ? (
            <p className="text-red-600 text-xs mt-1">{errors.password}</p>
          ) : (
            values.password && (
              <PasswordStrengthMeter password={values.password} />
            )
          )}
        </div>

        <FormField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          required
          autoComplete="new-password"
          error={errors.confirmPassword}
        />

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="termsAccepted"
              name="termsAccepted"
              type="checkbox"
              checked={values.termsAccepted}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="termsAccepted" className="text-gray-600">
              I accept the{' '}
              <Link href="/terms" className="text-blue-600 hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
            </label>
            {errors.terms && (
              <p className="text-red-600 text-xs mt-1">{errors.terms}</p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          fullWidth
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Register
        </Button>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
          <p className="text-blue-700 text-sm">
            After registration, you&apos;ll need to verify your email address to
            activate your account.
          </p>
        </div>

        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}
