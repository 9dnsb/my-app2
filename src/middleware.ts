import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// Initialize Redis connection
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

// Limit to 5 requests per 60 seconds per IP
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(5, '60 s'),
  analytics: true,
})

export async function middleware(req: NextRequest) {
  const forwardedFor = req.headers.get('x-forwarded-for')
  const ip = forwardedFor?.split(',')[0]?.trim() ?? 'unknown'

  // Only apply to credential-based login or sensitive APIs
  if (req.nextUrl.pathname.startsWith('/api/auth')) {
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
  matcher: ['/api/auth/:path*'],
}
