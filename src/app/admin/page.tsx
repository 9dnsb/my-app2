// src/app/dashboard/admin/page.tsx (or wherever your Admin page lives)
import { requireAdmin } from '@/lib/withAuth'

export default async function AdminHomePage() {
  // 🛡️ Protect the page: only allow admins
  const session = await requireAdmin()

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-8">
        Welcome to the Admin Platform, {session.user.name || session.user.email}
        !
      </h1>
    </main>
  )
}
