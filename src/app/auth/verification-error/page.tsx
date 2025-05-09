// src/app/auth/verification-error/page.tsx
'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useForm } from '@/hooks/useForm'
import { isValidEmail } from '@/lib/validation'
import EmailForm from '@/components/EmailForm'
import FormContainer from '@/components/FormContainer'
import SuspensePage from '@/components/SuspensePage'
import { resendVerificationEmail } from '@/lib/authVerificationService'

interface ResendFormValues {
  email: string
}

// Component that uses useSearchParams
function VerificationErrorContent() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  // Get error message based on error code
  const getErrorMessage = () => {
    switch (error) {
      case 'missing-token':
        return 'The verification link is invalid. No token was provided.'
      case 'invalid-token':
        return 'The verification link is invalid or has already been used.'
      case 'expired-token':
        return 'The verification link has expired. Please request a new one.'
      default:
        return 'There was a problem verifying your email. Please try again.'
    }
  }

  // Validate the email form
  const validateEmailForm = (values: ResendFormValues) => {
    const errors: Record<string, string> = {}

    if (!values.email) {
      errors.email = 'Email is required'
    } else if (!isValidEmail(values.email)) {
      errors.email = 'Please enter a valid email address'
    }

    return errors
  }

  // Handle form submission
  const handleResendSubmit = async (values: ResendFormValues) => {
    return await resendVerificationEmail(values.email)
  }

  // Use our custom form hook
  const {
    values,
    errors,
    isSubmitting,
    submitError,
    handleChange,
    handleSubmit,
  } = useForm<ResendFormValues>(
    { email: '' },
    validateEmailForm,
    handleResendSubmit
  )

  return (
    <>
      <div className="rounded-full bg-red-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      <p className="mb-6 text-center">{getErrorMessage()}</p>

      <div className="bg-gray-50 p-4 rounded border mb-6">
        <h2 className="text-lg font-medium mb-2">Resend Verification Email</h2>

        <FormContainer
          onSubmit={handleSubmit}
          submitError={submitError}
          isSubmitting={isSubmitting}
          submitButtonText="Resend Verification Email"
          loadingText="Sending..."
        >
          <EmailForm
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            disabled={isSubmitting}
            placeholder="Your email address"
          />
        </FormContainer>
      </div>

      <div className="text-center">
        <Link href="/auth/login" className="text-blue-600 hover:underline">
          Return to login
        </Link>
      </div>
    </>
  )
}

// Main page component with Suspense
export default function VerificationErrorPage() {
  return (
    <SuspensePage title="Verification Failed">
      <VerificationErrorContent />
    </SuspensePage>
  )
}
