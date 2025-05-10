import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { getToken } from 'next-auth/jwt'

// Initialize Redis connection
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

// Rate limit: 20 requests per minute during development
// Consider reducing this to 5–10 in production
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(20, '60 s'),
  analytics: true,
})

// Protected routes that require authentication
const PROTECTED_ROUTES = ['/admin', '/client', '/dashboard']

export async function middleware(req: NextRequest) {
  const forwardedFor = req.headers.get('x-forwarded-for')
  const ip = forwardedFor?.split(',')[0]?.trim() ?? 'unknown'
  const path = req.nextUrl.pathname

  // Rate limiting for auth endpoints
  if (path.startsWith('/api/auth')) {
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

  // Authentication check for protected routes
  if (isProtectedRoute(path)) {
    try {
      const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

      if (!token) {
        console.log(`[AUTH] No valid token for ${path}`)
        return redirectToLogin(req)
      }

      // Role checking is done at the page level
    } catch (error) {
      console.error(`[AUTH ERROR] ${error}`)
      return NextResponse.redirect(new URL('/auth/error', req.url))
    }
  }

  // Just continue normally; security headers are handled in next.config.ts
  return NextResponse.next()
}

// Helper function to check if route is protected
function isProtectedRoute(path: string): boolean {
  return PROTECTED_ROUTES.some(
    (route) => path === route || path.startsWith(`${route}/`)
  )
}

// Helper function to redirect to login
function redirectToLogin(req: NextRequest): NextResponse {
  const redirectUrl = new URL('/auth/login', req.url)
  return NextResponse.redirect(redirectUrl)
}

export const config = {
  matcher: ['/api/auth/:path*'],
}
