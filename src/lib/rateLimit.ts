// src/lib/rateLimit.ts
import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'

// Initialize Redis connection
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

// Rate limit configurations
const rateLimits = {
  // 5 requests per minute for auth endpoints
  auth: new Ratelimit({
    redis,
    limiter: Ratelimit.fixedWindow(5, '60 s'),
    analytics: true,
    prefix: 'ratelimit:auth',
  }),

  // 20 requests per minute for general API endpoints
  api: new Ratelimit({
    redis,
    limiter: Ratelimit.fixedWindow(20, '60 s'),
    analytics: true,
    prefix: 'ratelimit:api',
  }),
}

/**
 * Check rate limit for a specific IP address and limit type
 */
export async function checkRateLimit(ip: string, type: 'auth' | 'api') {
  const limiter = rateLimits[type]
  const result = await limiter.limit(ip)

  return {
    success: result.success,
    limit: result.limit,
    remaining: result.remaining,
    reset: result.reset,
    secondsUntilReset: Math.ceil((result.reset - Date.now()) / 1000),
  }
}
