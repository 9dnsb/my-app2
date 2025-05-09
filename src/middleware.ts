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
// Consider reducing this to 5-10 in production
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(20, '60 s'),
  analytics: true,
})

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
  if (
    path.startsWith('/admin') ||
    path.startsWith('/client') ||
    path === '/dashboard'
  ) {
    try {
      const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

      // Not authenticated
      if (!token) {
        console.log(`[AUTH] No valid token for ${path}`)

        const redirectUrl = new URL('/auth/login', req.url)

        // Validate callback URL (simple validation for Edge Runtime)
        let callbackUrl = req.nextUrl.pathname
        if (!callbackUrl.startsWith('/') || callbackUrl.includes('//')) {
          callbackUrl = '/dashboard'
        }

        redirectUrl.searchParams.set('callbackUrl', callbackUrl)
        return NextResponse.redirect(redirectUrl)
      }

      // Note: We're checking roles at the page level instead of here
      // This avoids issues with Edge Runtime and simplifies our approach
    } catch (error) {
      console.error(`[AUTH ERROR] ${error}`)
      return NextResponse.redirect(new URL('/auth/error', req.url))
    }
  }

  // Add security headers to all responses
  const response = NextResponse.next()

  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  return response
}

export const config = {
  matcher: [
    '/api/auth/:path*',
    '/admin/:path*',
    '/client/:path*',
    '/dashboard/:path*',
  ],
}
