// src/app/dashboard/page.tsx
import { requireUser } from '@/lib/withAuth'
import LogoutButton from '@/components/LogoutButton'
import CreditCardForm from '@/components/CreditCardForm'

export default async function DashboardPage() {
  const session = await requireUser()
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <div className="max-w-2xl mx-auto mt-12 px-4">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <p className="text-lg mb-6">Welcome, {session.user?.email}!</p>

        <LogoutButton />
      </div>

      <div className="max-w-4xl mx-auto mt-12 px-4">
        <h2 className="text-xl font-bold mb-6">Your Credit Card Information</h2>
        <CreditCardForm />
      </div>
    </main>
  )
}
