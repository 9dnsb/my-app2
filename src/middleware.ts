import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'

// --- 🛡️ Initialize Redis connection ---
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

// --- 🛡️ Set up basic rate limiting ---
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(20, '60 s'), // 20 requests per 60 seconds
  analytics: true,
})

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const forwardedFor = req.headers.get('x-forwarded-for')
  const ip = forwardedFor?.split(',')[0]?.trim() || 'unknown'

  // --- 🔥 Rate limiting for sensitive API routes ---
  if (path.startsWith('/api/auth') || path.startsWith('/api/admin')) {
    const { success, limit, remaining, reset } = await ratelimit.limit(ip)

    if (!success) {
      return NextResponse.json(
        { message: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const secondsUntilReset = Math.ceil((reset - Date.now()) / 1000)
    console.log(
      `[RATE LIMIT] ${ip}: ${remaining}/${limit} remaining (reset in ${secondsUntilReset}s)`
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
