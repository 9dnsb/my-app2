// src/components/FormContainer.tsx
'use client'

import { ReactNode } from 'react'
import Alert from '@/components/Alert'
import Button from '@/components/Button'

interface FormContainerProps {
  children: ReactNode
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  submitError?: string
  isSubmitting?: boolean
  submitButtonText: string
  loadingText?: string
  className?: string
  successMessage?: string
}

export default function FormContainer({
  children,
  onSubmit,
  submitError,
  isSubmitting = false,
  submitButtonText,
  loadingText,
  className = 'space-y-4',
  successMessage,
}: FormContainerProps) {
  return (
    <>
      {successMessage && <Alert type="success" message={successMessage} />}

      {submitError && (
        <div className="mb-4">
          <Alert type="error" message={submitError} />
        </div>
      )}

      <form onSubmit={onSubmit} className={className}>
        {children}

        <Button
          type="submit"
          fullWidth
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? loadingText || 'Submitting...' : submitButtonText}
        </Button>
      </form>
    </>
  )
}
