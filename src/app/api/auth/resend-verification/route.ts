import { createApiHandler, createErrorResponse } from '@/lib/apiUtils'
import { handleVerificationResend } from '@/lib/authVerificationService.server'
import { checkRateLimit } from '@/lib/rateLimit'

export const POST = createApiHandler(async (req: Request) => {
  const { email } = await req.json()
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'

  if (!email || typeof email !== 'string') {
    return createErrorResponse('Email is required', 400)
  }

  const rateLimitResult = await checkRateLimit(ip, 'auth')
  if (!rateLimitResult.success) {
    return createErrorResponse(
      'Too many requests. Please try again later.',
      429
    )
  }

  return handleVerificationResend({ email })
})
