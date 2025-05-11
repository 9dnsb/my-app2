// src/app/dashboard/page.tsx
import Link from 'next/link'
import LogoutButton from '@/components/LogoutButton'
import { withAuth } from '@/lib/withAuth'

export default async function DashboardPage() {
  const session = await withAuth()

  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <div className="max-w-2xl mx-auto mt-12 px-4">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <p className="text-lg mb-6">Welcome, {session.user?.email}!</p>

        <LogoutButton />
      </div>

      <div className="max-w-4xl mx-auto mt-12 px-4">
        <h2 className="text-xl font-bold mb-6">Forms You Can Complete</h2>
        <ul className="space-y-4">
          <li>
            <Link
              href="/dashboard/forms/financial-picture"
              className="block p-4 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            >
              <h3 className="text-lg font-semibold">Financial Picture</h3>
              <p className="text-sm text-gray-600">
                Start building your financial overview by entering your income
                information.
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  )
}
