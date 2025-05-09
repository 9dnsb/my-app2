// src/hooks/useForm.ts
'use client'

import { useState, useEffect } from 'react'

type ValidationFunction<T> = (values: T) => Record<string, string>

/**
 * Custom hook for form handling with validation
 */
export function useForm<T>(
  initialValues: T,
  validate: ValidationFunction<T>,
  onSubmit: (values: T) => Promise<void | string>
) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [attemptCount, setAttemptCount] = useState(0)

  // Load attempt count from storage if available
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedAttempts = sessionStorage.getItem('formAttempts')
      if (storedAttempts) {
        setAttemptCount(parseInt(storedAttempts, 10))
      }
    }
  }, [])

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    const inputValue = type === 'checkbox' ? checked : value

    // Update form values safely with type casting
    setValues(
      (prev) =>
        ({
          ...prev,
          [name]: inputValue,
        } as T)
    )

    // Clear specific field error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError('')

    // Rate limiting with form attempts
    const newAttemptCount = attemptCount + 1
    setAttemptCount(newAttemptCount)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('formAttempts', newAttemptCount.toString())
    }

    // Simple rate limiting
    if (newAttemptCount > 5) {
      setSubmitError('Too many attempts. Please try again later.')
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return
    }

    // Validate form
    const newErrors = validate(values)
    setErrors(newErrors)

    // Only proceed if no validation errors
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true)

      try {
        await onSubmit(values)

        // Reset attempt counter on success
        if (typeof window !== 'undefined') {
          sessionStorage.removeItem('formAttempts')
        }
      } catch (error) {
        console.error('Form submission error:', error)
        if (error instanceof Error) {
          setSubmitError(
            error.message || 'An error occurred. Please try again.'
          )
        } else {
          setSubmitError('An error occurred. Please try again.')
        }
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return {
    values,
    errors,
    isSubmitting,
    submitError,
    handleChange,
    handleSubmit,
    setValues,
    setErrors,
    setSubmitError,
  }
}
