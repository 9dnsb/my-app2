// app/admin/page.tsx
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'

export default async function AdminHomePage() {
  // Get the session
  const session = await getServerSession(authOptions)

  // If not logged in, redirect to login
  if (!session || !session.user?.email) {
    redirect('/auth/login')
  }

  try {
    // Check if user has admin role
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { type: true },
    })

    // If not admin, redirect to dashboard
    if (!user || user.type !== 'admin') {
      redirect('/dashboard')
    }
  } catch (error) {
    console.error('Error checking user role:', error)
    // If there's an error, safely redirect to dashboard
    redirect('/dashboard')
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-lg">Welcome! You&apos;re logged in as an admin.</p>
    </main>
  )
}
