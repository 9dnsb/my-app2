'use client'

import { ReactNode } from 'react'

type AlertType = 'success' | 'error' | 'info' | 'warning'

interface AlertProps {
  type: AlertType
  message: string | ReactNode
  className?: string
}

const ALERT_STYLES = {
  success: 'bg-green-50 border-l-4 border-green-500 text-green-700',
  error: 'bg-red-50 border-l-4 border-red-500 text-red-700',
  info: 'bg-blue-50 border-l-4 border-blue-500 text-blue-700',
  warning: 'bg-yellow-50 border-l-4 border-yellow-500 text-yellow-700',
}

export default function Alert({ type, message, className = '' }: AlertProps) {
  if (!message) return null
  
  return (
    <div
      className={`p-3 rounded mb-4 ${ALERT_STYLES[type]} ${className}`}
      role="alert"
    >
      <p className="text-sm">{message}</p>
    </div>
  )
}
