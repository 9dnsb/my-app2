import LogoutButton from '@/components/LogoutButton'

export default async function AdminHomePage() {
  // Use the withAuth utility with required role

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-lg">Welcome! You&apos;re logged in as an admin.</p>

      <LogoutButton />
    </main>
  )
}
