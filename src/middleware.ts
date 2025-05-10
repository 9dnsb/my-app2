import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { getToken } from 'next-auth/jwt'

// Init Redis and Ratelimit
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(20, '60 s'),
  analytics: true,
})

// Lists of routes
const PROTECTED_ROUTES = ['/admin', '/client', '/dashboard']
const PUBLIC_ROUTES = ['/auth/login', '/auth/register', '/auth/error']

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname

  // Rate limit /api/auth routes
  if (path.startsWith('/api/auth')) {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
    const { success } = await ratelimit.limit(ip)
    if (!success) {
      return NextResponse.json(
        { message: 'Too many requests' },
        { status: 429 }
      )
    }
  }

  // Allow public routes
  if (PUBLIC_ROUTES.some((route) => path.startsWith(route))) {
    return NextResponse.next()
  }

  // Protect private routes
  if (PROTECTED_ROUTES.some((route) => path.startsWith(route))) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    if (!token) {
      return NextResponse.redirect(new URL('/auth/login', req.url))
    }
  }

  return NextResponse.next()
}

// Match everything except static assets
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
