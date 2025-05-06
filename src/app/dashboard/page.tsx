import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'
import { redirect } from 'next/navigation'
import LogoutButton from '@/components/LogoutButton'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/login')
  }

  return (
    <div className="max-w-2xl mx-auto mt-12 px-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <p className="text-lg">Welcome, {session.user?.email}!</p>

      <LogoutButton />
    </div>
  )
}
