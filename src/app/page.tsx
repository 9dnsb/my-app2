// src/app/page.tsx
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'

export default async function HomePage() {
  // Get the current session
  const session = await getServerSession(authOptions)

  // Only redirect if user is logged in
  if (session?.user?.email) {
    // Find user type to determine redirect destination
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { type: true },
    })

    // Redirect based on user type
    if (user?.type === 'admin') {
      return redirect('/admin')
    } else {
      return redirect('/dashboard')
    }
  }

  // If no user is logged in, show the homepage
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-8">Welcome to the Platform</h1>
      <div className="flex gap-6">
        <Link
          href="/auth/register"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Register
        </Link>
        <Link
          href="/auth/login"
          className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
        >
          Login
        </Link>
      </div>
    </main>
  )
}
