// src/app/auth/login/page.tsx
'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useForm } from '@/hooks/useForm'
import { validateLoginForm } from '@/lib/validation'
import {
  loginWithCredentials,
  getUserRedirectDestination,
} from '@/lib/authService'
import FormField from '@/components/FormField'
import EmailForm from '@/components/EmailForm'
import FormContainer from '@/components/FormContainer'
import SuspensePage from '@/components/SuspensePage'
import { resendVerificationEmail } from '@/lib/authVerificationService'

interface LoginFormValues {
  email: string
  password: string
  rememberMe: boolean
}

// Component that uses useSearchParams
function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || ''
  const registered = searchParams.get('registered') === 'true'

  const [showResendVerification, setShowResendVerification] = useState(false)
  const [resendMessage, setResendMessage] = useState('')
  const [isResending, setIsResending] = useState(false)

  // Form submission handler
  const handleLoginSubmit = async (values: LoginFormValues) => {
    // Reset verification state
    setShowResendVerification(false)
    setResendMessage('')

    // Attempt login
    const res = await loginWithCredentials(
      values.email,
      values.password,
      values.rememberMe
    )

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

    // Determine redirect destination
    const redirectTo = await getUserRedirectDestination(values.email)

    // Use the callback URL if provided, otherwise use our determined path
    const finalRedirect = callbackUrl || redirectTo

    // Redirect to the appropriate page
    router.push(finalRedirect)
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
      // Use the service instead of direct fetch
      const message = await resendVerificationEmail(values.email)
      setResendMessage(message)
    } catch (error) {
      console.error('Verification error:', error)
      setResendMessage('An error occurred. Please try again.')
    } finally {
      setIsResending(false)
    }
  }

  // Render verification resend button if needed
  const renderResendVerification = () => {
    if (!showResendVerification) return null

    return (
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
    )
  }

  return (
    <FormContainer
      onSubmit={handleSubmit}
      submitError={submitError}
      isSubmitting={isSubmitting}
      submitButtonText="Sign In"
      loadingText="Signing in..."
      successMessage={
        registered
          ? 'Registration successful! Please check your email to verify your account before logging in.'
          : undefined
      }
      className="space-y-4"
    >
      {renderResendVerification()}

      <EmailForm
        value={values.email}
        onChange={handleChange}
        error={errors.email}
        disabled={isSubmitting}
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
    </FormContainer>
  )
}

// Main page component with Suspense
export default function LoginPage() {
  return (
    <SuspensePage title="Login">
      <LoginForm />
    </SuspensePage>
  )
}
