// src/components/SecureScript.tsx

'use client'

import Script, { ScriptProps } from 'next/script'
import { useEffect, useState } from 'react'

export function SecureScript(props: ScriptProps) {
  const [nonce, setNonce] = useState<string | null>(null)

  useEffect(() => {
    // Get nonce from cookie or from meta tag
    const meta = document.querySelector('meta[name="csp-nonce"]')
    const cookieMatch = document.cookie.match(/(?:^|;\s*)csp-nonce=([^;]*)/)

    if (meta?.getAttribute('content')) {
      setNonce(meta.getAttribute('content'))
    } else if (cookieMatch) {
      setNonce(decodeURIComponent(cookieMatch[1]))
    }
  }, [])

  return (
    <Script
      {...props}
      nonce={nonce || undefined} // Attach the nonce dynamically
    />
  )
}
