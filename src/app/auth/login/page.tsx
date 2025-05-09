'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'
  const registered = searchParams.get('registered') === 'true'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showResendVerification, setShowResendVerification] = useState(false)
  const [resendMessage, setResendMessage] = useState('')
  const [isResending, setIsResending] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!email || !password) {
      setError('Email and password are required')
      return
    }

    setError('')
    setIsLoading(true)
    setShowResendVerification(false)
    setResendMessage('')

    try {
      // Security best practice: trim and normalize email
      const sanitizedEmail = email.trim().toLowerCase()

      const res = await signIn('credentials', {
        email: sanitizedEmail,
        password,
        remember: rememberMe,
        redirect: false,
        callbackUrl,
      })

      if (res?.ok) {
        router.push(callbackUrl)
      } else if (res?.error === 'email-not-verified') {
        setError(
          'Your email is not verified. Please check your inbox or request a new verification email.'
        )
        setShowResendVerification(true)
      } else if (res?.error === 'CredentialsSignin') {
        setError('Invalid email or password')
      } else {
        setError('An error occurred. Please try again.')
      }
    } catch {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  async function handleResendVerification() {
    if (!email) {
      setResendMessage('Please enter your email address above.')
      return
    }

    setIsResending(true)
    setResendMessage('')

    try {
      const sanitizedEmail = email.trim().toLowerCase()

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
        <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded mb-4">
          <p className="text-green-700 text-sm">
            Registration successful! Please check your email to verify your
            account before logging in.
          </p>
        </div>
      )}

      {error && (
        <div
          className="bg-red-50 border-l-4 border-red-500 p-3 rounded mb-4"
          role="alert"
        >
          <p className="text-red-700 text-sm">{error}</p>

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
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            required
            disabled={isLoading}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            disabled={isLoading}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-4 w-4 border-gray-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-700"
          >
            Remember me
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-black text-white py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Signing in...
            </span>
          ) : (
            'Sign In'
          )}
        </button>

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
