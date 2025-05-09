// src/app/auth/verification-success/page.tsx
import Link from 'next/link'
import AuthLayout from '@/components/AuthLayout'

export default function VerificationSuccessPage() {
  return (
    <AuthLayout title="Email Verified!">
      <div className="rounded-full bg-green-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <p className="mb-6 text-center">
        Your email has been successfully verified. You can now log in to your
        account.
      </p>

      <div className="text-center">
        <Link
          href="/auth/login"
          className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          Log In
        </Link>
      </div>
    </AuthLayout>
  )
}
