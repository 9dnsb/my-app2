'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!email || !password) {
      setError('Email and password are required')
      return
    }

    setError('')
    setIsLoading(true)

    try {
      // Security best practice: trim and normalize email
      const sanitizedEmail = email.trim().toLowerCase()

      const res = await signIn('credentials', {
        email: sanitizedEmail,
        password,
        remember: rememberMe,
        redirect: false,
        callbackUrl, // Server should validate this
      })

      if (res?.ok) {
        router.push(callbackUrl)
      } else if (res?.error === 'TooManyRequests') {
        setError('Too many attempts. Please try again later.')
      } else if (res?.error === 'CredentialsSignin') {
        setError('Invalid email or password')
      } else {
        setError('An error occurred. Please try again.')
      }
    } catch {
      // Removed the parameter entirely since we don't need it
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-12 px-4">
      <h1 className="text-2xl font-bold mb-6">Login</h1>

      {error && (
        <div
          className="bg-red-50 border-l-4 border-red-500 p-3 rounded mb-4"
          role="alert"
        >
          <p className="text-red-700 text-sm">{error}</p>
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
          {isLoading ? 'Signing in...' : 'Sign In'}
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
