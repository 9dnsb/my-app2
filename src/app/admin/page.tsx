// src/app/admin/page.tsx
import AdminDashboardPage from '@/components/AdminDashboardPage'
import { requireAdmin } from '@/lib/withAuth'

export default async function AdminHomePage() {
  const session = await requireAdmin()

  return <AdminDashboardPage session={session} />
}
