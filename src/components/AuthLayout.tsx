// src/components/AuthLayout.tsx
import { ReactNode } from 'react'

interface AuthLayoutProps {
  title: string
  children: ReactNode
}

export default function AuthLayout({ title, children }: AuthLayoutProps) {
  return (
    <div className="max-w-md mx-auto mt-12 px-4">
      <h1 className="text-2xl font-bold mb-6">{title}</h1>
      {children}
    </div>
  )
}
