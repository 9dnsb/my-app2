'use client'

import { InputHTMLAttributes } from 'react'

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  error?: string
  required?: boolean
  helpText?: string
}

export default function FormField({
  label,
  name,
  error,
  required,
  helpText,
  className = '',
  ...props
}: FormFieldProps) {
  const id = `field-${name}`
  const errorId = error ? `${id}-error` : undefined
  
  return (
    <div className="mb-4">
      <label 
        htmlFor={id} 
        className="block text-sm font-medium mb-1"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <input
        id={id}
        name={name}
        className={`w-full border p-2 rounded ${
          error ? 'border-red-500' : ''
        } ${className}`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : helpText ? `${id}-help` : undefined}
        {...props}
      />
      
      {error && (
        <p id={errorId} className="text-red-600 text-xs mt-1">
          {error}
        </p>
      )}
      
      {helpText && !error && (
        <p id={`${id}-help`} className="text-gray-600 text-xs mt-1">
          {helpText}
        </p>
      )}
    </div>
  )
}
