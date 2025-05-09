'use client'

import { signOut } from 'next-auth/react'
import Button from '@/components/Button'

export default function LogoutButton() {
  return (
    <Button
      onClick={() => signOut({ callbackUrl: '/' })}
      variant="danger"
      className="mt-6"
    >
      Sign Out
    </Button>
  )
}
