// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import { Ratelimit } from '@upstash/ratelimit'
// import { Redis } from '@upstash/redis'
// import { getToken } from 'next-auth/jwt'

// // Initialize Redis connection
// const redis = new Redis({
//   url: process.env.UPSTASH_REDIS_REST_URL!,
//   token: process.env.UPSTASH_REDIS_REST_TOKEN!,
// })

// // Rate limit: 20 requests per minute during development
// const ratelimit = new Ratelimit({
//   redis,
//   limiter: Ratelimit.fixedWindow(20, '60 s'),
//   analytics: true,
// })

// // Protected routes that require authentication
// const PROTECTED_ROUTES = ['/admin', '/client', '/dashboard']

// // Public routes that do NOT require authentication
// const PUBLIC_ROUTES = ['/auth/login', '/auth/register', '/auth/error']

// export async function middleware(req: NextRequest) {
//   const forwardedFor = req.headers.get('x-forwarded-for')
//   const ip = forwardedFor?.split(',')[0]?.trim() ?? 'unknown'
//   const path = req.nextUrl.pathname

//   const response = NextResponse.next()

//   // --- 🛡️ Generate a random nonce for this response ---
//   const nonce = generateNonce()

//   // Set nonce cookie
//   response.cookies.set('csp-nonce', nonce, {
//     path: '/',
//     httpOnly: false,
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'strict',
//   })

//   // --- 🔥 Rate limiting for sensitive API routes ---
//   if (path.startsWith('/api/auth')) {
//     const { success, limit, remaining, reset } = await ratelimit.limit(ip)

//     if (!success) {
//       return NextResponse.json(
//         { message: 'Too many requests. Please try again later.' },
//         { status: 429 }
//       )
//     }

//     const secondsUntilReset = Math.ceil((reset - Date.now()) / 1000)
//     console.log(
//       `[RATE LIMIT] ${ip}: ${remaining}/${limit} remaining (reset in ${secondsUntilReset}s)`
//     )
//   }

//   // --- 🔥 Authentication Check ---

//   // Allow public routes without auth
//   if (isPublicRoute(path)) {
//     return response
//   }

//   // Enforce authentication on protected routes
//   if (isProtectedRoute(path)) {
//     try {
//       const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

//       if (!token) {
//         console.log(`[AUTH] No valid token for ${path}`)
//         return redirectToLogin(req)
//       }

//       // Role checking is done inside pages
//     } catch (error) {
//       console.error(`[AUTH ERROR] ${error}`)
//       return NextResponse.redirect(new URL('/auth/error', req.url))
//     }
//   }

//   return response
// }

// // --- Helper functions ---

// function generateNonce() {
//   const array = new Uint8Array(16)
//   crypto.getRandomValues(array)
//   return Buffer.from(array).toString('base64')
// }

// function isProtectedRoute(path: string): boolean {
//   return PROTECTED_ROUTES.some(
//     (route) => path === route || path.startsWith(`${route}/`)
//   )
// }

// function isPublicRoute(path: string): boolean {
//   return PUBLIC_ROUTES.some(
//     (route) => path === route || path.startsWith(`${route}/`)
//   )
// }

// function redirectToLogin(req: NextRequest): NextResponse {
//   const redirectUrl = new URL('/auth/login', req.url)
//   return NextResponse.redirect(redirectUrl)
// }

// // --- Matcher: All non-static assets ---

// export const config = {
//   matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
// }
import { NextResponse } from 'next/server'

// Basic middleware function
export function middleware() {
  return NextResponse.next()
}

// Apply middleware only to non-static files
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
