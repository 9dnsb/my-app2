'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from '@/hooks/useForm'
import { validateLoginForm } from '@/lib/validation'
import {
  loginWithCredentials,
  getUserRedirectDestination,
} from '@/lib/authService'
import { resendVerificationEmail } from '@/lib/authVerificationService'
import FormContainer from '@/components/FormContainer'
import EmailForm from '@/components/EmailForm'
import FormField from '@/components/FormField'
import SuspensePage from '@/components/SuspensePage'
import Link from 'next/link'

interface LoginFormValues {
  email: string
  password: string
  rememberMe: boolean
}

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || ''
  const registered = searchParams.get('registered') === 'true'

  const [showResendVerification, setShowResendVerification] = useState(false)
  const [resendMessage, setResendMessage] = useState('')
  const [isResending, setIsResending] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false) // ✨ manually track

  const handleLoginSubmit = async (values: LoginFormValues) => {
    setShowResendVerification(false)
    setResendMessage('')

    const res = await loginWithCredentials(
      values.email,
      values.password,
      values.rememberMe
    )

    if (!res?.ok) {
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

    const redirectTo = await getUserRedirectDestination(values.email)
    const finalRedirect = callbackUrl || redirectTo

    // ✨ mark navigating before push
    setIsNavigating(true)

    router.push(finalRedirect)

    // ❗ Don't set isNavigating(false) — let navigation complete naturally
  }

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

  async function handleResendVerification() {
    if (!values.email) {
      setResendMessage('Please enter your email address above.')
      return
    }

    setIsResending(true)
    setResendMessage('')

    try {
      const message = await resendVerificationEmail(values.email)
      setResendMessage(message)
    } catch (error) {
      console.error('Verification error:', error)
      setResendMessage('An error occurred. Please try again.')
    } finally {
      setIsResending(false)
    }
  }

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
      buttonLoading={isSubmitting || isNavigating} // ✨ fix here
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

export default function LoginPage() {
  return (
    <SuspensePage title="Login">
      <LoginForm />
    </SuspensePage>
  )
}
