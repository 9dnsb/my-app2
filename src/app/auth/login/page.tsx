'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useForm } from '@/hooks/useForm'
import Alert from '@/components/Alert'
import FormField from '@/components/FormField'
import Button from '@/components/Button'
import { normalizeEmail } from '@/lib/validation'

interface LoginFormValues {
  email: string
  password: string
  rememberMe: boolean
}

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || ''
  const registered = searchParams.get('registered') === 'true'

  const [showResendVerification, setShowResendVerification] = useState(false)
  const [resendMessage, setResendMessage] = useState('')
  const [isResending, setIsResending] = useState(false)

  // Validate form
  const validateLoginForm = (values: LoginFormValues) => {
    const errors: Record<string, string> = {}

    if (!values.email) {
      errors.email = 'Email is required'
    }

    if (!values.password) {
      errors.password = 'Password is required'
    }

    return errors
  }

  // Form submission handler
  const handleLoginSubmit = async (values: LoginFormValues) => {
    // Reset verification state
    setShowResendVerification(false)
    setResendMessage('')

    // Normalize email for security
    const sanitizedEmail = normalizeEmail(values.email)

    // Attempt login
    const res = await signIn('credentials', {
      email: sanitizedEmail,
      password: values.password,
      remember: values.rememberMe,
      redirect: false,
    })

    // Handle login result
    if (!res?.ok) {
      // Handle specific error cases
      if (res?.error === 'email-not-verified') {
        setShowResendVerification(true)
        throw new Error(
          'Your email is not verified. Please check your inbox or request a new verification email.'
        )
      } else if (res?.error === 'CredentialsSignin') {
        throw new Error('Invalid email or password')
      } else {
        throw new Error('An error occurred. Please try again.')
      }
    }

    // Check user type for proper redirection
    try {
      const checkTypeResponse = await fetch('/api/auth/check-user-type', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: sanitizedEmail }),
      })

      let redirectTo = '/dashboard' // Default

      if (checkTypeResponse.ok) {
        const { type } = await checkTypeResponse.json()
        if (type === 'admin') {
          redirectTo = '/admin'
        }
      }

      // Use the callback URL if provided, otherwise use our determined path
      const finalRedirect = callbackUrl || redirectTo

      // Redirect to the appropriate page
      router.push(finalRedirect)
    } catch (error) {
      console.error('Error checking user type:', error)
      // If there's an error determining user type, default to dashboard
      router.push('/dashboard')
    }
  }

  // Use our custom form hook
  const {
    values,
    errors,
    isSubmitting,
    submitError,
    handleChange,
    handleSubmit,
  } = useForm<LoginFormValues>(
    { email: '', password: '', rememberMe: false },
    validateLoginForm,
    handleLoginSubmit
  )

  // Handle resend verification
  async function handleResendVerification() {
    if (!values.email) {
      setResendMessage('Please enter your email address above.')
      return
    }

    setIsResending(true)
    setResendMessage('')

    try {
      const sanitizedEmail = normalizeEmail(values.email)

      const res = await fetch('/api/auth/resend-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: sanitizedEmail }),
      })

      const data = await res.json()
      setResendMessage(data.message)
    } catch (error) {
      console.error('Verification error:', error)
      setResendMessage('An error occurred. Please try again.')
    } finally {
      setIsResending(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-12 px-4">
      <h1 className="text-2xl font-bold mb-6">Login</h1>

      {registered && (
        <Alert
          type="success"
          message="Registration successful! Please check your email to verify your account before logging in."
        />
      )}

      {submitError && (
        <div className="mb-4">
          <Alert type="error" message={submitError} />

          {showResendVerification && (
            <div className="mt-2">
              <button
                onClick={handleResendVerification}
                disabled={isResending}
                className="text-sm text-blue-600 underline"
                type="button"
              >
                {isResending ? 'Sending...' : 'Resend verification email'}
              </button>

              {resendMessage && <p className="text-sm mt-1">{resendMessage}</p>}
            </div>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          autoComplete="username"
          required
          disabled={isSubmitting}
          error={errors.email}
        />

        <FormField
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          autoComplete="current-password"
          required
          disabled={isSubmitting}
          error={errors.password}
        />

        <div className="flex items-center">
          <input
            id="rememberMe"
            name="rememberMe"
            type="checkbox"
            checked={values.rememberMe}
            onChange={handleChange}
            className="h-4 w-4 border-gray-300 rounded"
          />
          <label
            htmlFor="rememberMe"
            className="ml-2 block text-sm text-gray-700"
          >
            Remember me
          </label>
        </div>

        <Button
          type="submit"
          fullWidth
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Signing in...' : 'Sign In'}
        </Button>

        <div className="flex justify-between text-sm">
          <Link
            href="/auth/forgot-password"
            className="text-blue-600 hover:underline"
          >
            Forgot password?
          </Link>
          <Link href="/auth/register" className="text-blue-600 hover:underline">
            Create an account
          </Link>
        </div>
      </form>
    </div>
  )
}
