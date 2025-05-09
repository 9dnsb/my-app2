// src/components/SuspensePage.tsx
'use client'

import { ReactNode, Suspense } from 'react'
import AuthLayout from '@/components/AuthLayout'

interface SuspensePageProps {
  title: string
  children: ReactNode
  fallback?: ReactNode
}

export default function SuspensePage({
  title,
  children,
  fallback = <div>Loading...</div>,
}: SuspensePageProps) {
  return (
    <AuthLayout title={title}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </AuthLayout>
  )
}
