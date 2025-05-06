'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [error, setError] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email') as string
    const name = formData.get('name') as string
    const password = formData.get('password') as string

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, name, password }),
      headers: { 'Content-Type': 'application/json' },
    })

    if (res.ok) {
      router.push('/auth/login')
    } else {
      const data = await res.json()
      setError(data.message || 'Registration failed')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-12 px-4">
      <h1 className="text-2xl font-bold mb-6">Create an Account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full border p-2 rounded"
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  )
}
