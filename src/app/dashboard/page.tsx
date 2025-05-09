// src/app/dashboard/page.tsx
import { withAuth } from '@/lib/withAuth'
import LogoutButton from '@/components/LogoutButton'

export default async function DashboardPage() {
  // Use withAuth without role requirement - just checks for valid session
  const session = await withAuth()

  return (
    <div className="max-w-2xl mx-auto mt-12 px-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <p className="text-lg">Welcome, {session.user?.email}!</p>

      <LogoutButton />
    </div>
  )
}
