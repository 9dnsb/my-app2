'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

// Password requirements
const PASSWORD_MIN_LENGTH = 8

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [attemptCount, setAttemptCount] = useState(0)
  const [submitError, setSubmitError] = useState('')
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [termsAccepted, setTermsAccepted] = useState(false)

  // Load attempt count from storage
  useEffect(() => {
    const storedAttempts = sessionStorage.getItem('registerAttempts')
    if (storedAttempts) {
      setAttemptCount(parseInt(storedAttempts, 10))
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    // Clear specific field error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }

    // Evaluate password strength
    if (name === 'password') {
      const strength = calculatePasswordStrength(value)
      setPasswordStrength(strength)
    }
  }

  const calculatePasswordStrength = (password: string): number => {
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

  const getStrengthLabel = (strength: number): string => {
    return ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong', 'Very Strong'][
      strength
    ]
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < PASSWORD_MIN_LENGTH) {
      newErrors.password = `Password must be at least ${PASSWORD_MIN_LENGTH} characters`
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter'
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one lowercase letter'
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one number'
    } else if (!/[^A-Za-z0-9]/.test(formData.password)) {
      newErrors.password =
        'Password must contain at least one special character'
    }

    // Password confirmation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    // Terms and conditions
    if (!termsAccepted) {
      newErrors.terms = 'You must accept the Terms and Privacy Policy'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // Reset errors
    setSubmitError('')

    // Update attempt counter (simple anti-automation)
    const newAttemptCount = attemptCount + 1
    setAttemptCount(newAttemptCount)
    sessionStorage.setItem('registerAttempts', newAttemptCount.toString())

    // Simple rate limiting
    if (newAttemptCount > 5) {
      setSubmitError('Too many registration attempts. Please try again later.')

      // Add a deliberate delay to slow down brute force attempts
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return
    }

    // Validate form
    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // Log registration attempt (no sensitive data)
      console.info(`Registration attempt at ${new Date().toISOString()}`)

      // Prepare sanitized data
      const sanitizedData = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      }

      const res = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(sanitizedData),
        headers: { 'Content-Type': 'application/json' },
      })

      const data = await res.json()

      if (res.ok) {
        // Registration successful
        console.info(`Registration successful at ${new Date().toISOString()}`)

        // Reset attempt counter on success
        sessionStorage.removeItem('registerAttempts')

        // Redirect with success message
        router.push('/auth/login?registered=true')
      } else {
        // Registration failed
        console.warn(`Registration failed: ${data.message}`)
        setSubmitError(data.message || 'Registration failed. Please try again.')
      }
    } catch (error) {
      console.error('Registration error:', error)
      setSubmitError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-12 px-4">
      <h1 className="text-2xl font-bold mb-6">Create an Account</h1>

      {submitError && (
        <div
          className="bg-red-50 border-l-4 border-red-500 p-3 rounded mb-4"
          role="alert"
        >
          <p className="text-red-700 text-sm">{submitError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your name"
            className={`w-full border p-2 rounded ${
              errors.name ? 'border-red-500' : ''
            }`}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-red-600 text-xs mt-1">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your@email.com"
            required
            autoComplete="email"
            className={`w-full border p-2 rounded ${
              errors.email ? 'border-red-500' : ''
            }`}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-red-600 text-xs mt-1">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Create a password"
            required
            autoComplete="new-password"
            className={`w-full border p-2 rounded ${
              errors.password ? 'border-red-500' : ''
            }`}
            aria-invalid={errors.password ? 'true' : 'false'}
            aria-describedby={
              errors.password ? 'password-error' : 'password-strength'
            }
          />
          {errors.password ? (
            <p id="password-error" className="text-red-600 text-xs mt-1">
              {errors.password}
            </p>
          ) : (
            formData.password && (
              <div className="mt-1" id="password-strength">
                <div className="h-1 flex rounded overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 ${
                        i < passwordStrength
                          ? passwordStrength <= 1
                            ? 'bg-red-500'
                            : passwordStrength <= 2
                            ? 'bg-yellow-500'
                            : 'bg-green-500'
                          : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs mt-1">
                  {getStrengthLabel(passwordStrength)}
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Password must be at least 8 characters and include uppercase,
                  lowercase, numbers, and special characters.
                </p>
              </div>
            )
          )}
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium mb-1"
          >
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm your password"
            required
            autoComplete="new-password"
            className={`w-full border p-2 rounded ${
              errors.confirmPassword ? 'border-red-500' : ''
            }`}
            aria-invalid={errors.confirmPassword ? 'true' : 'false'}
            aria-describedby={
              errors.confirmPassword ? 'confirm-password-error' : undefined
            }
          />
          {errors.confirmPassword && (
            <p
              id="confirm-password-error"
              className="text-red-600 text-xs mt-1"
            >
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
              className="h-4 w-4 rounded border-gray-300"
              aria-invalid={errors.terms ? 'true' : 'false'}
              aria-describedby={errors.terms ? 'terms-error' : undefined}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="text-gray-600">
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
              <p id="terms-error" className="text-red-600 text-xs mt-1">
                {errors.terms}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-black text-white py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
          aria-busy={isLoading}
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
              Creating Account...
            </span>
          ) : (
            'Register'
          )}
        </button>

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
    </div>
  )
}
