import Link from 'next/link'

export default function HomePage() {
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
