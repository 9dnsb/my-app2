// src/app/api/auth/check-user-type/route.ts
import prisma from '@/lib/prisma'
import { normalizeEmail } from '@/lib/validation'
import {
  createErrorResponse,
  createSuccessResponse,
  createApiHandler,
} from '@/lib/apiUtils'

export const POST = createApiHandler(async (req: Request) => {
  const { email } = await req.json()

  if (!email || typeof email !== 'string') {
    return createErrorResponse('Invalid email', 400)
  }

  const normalizedEmail = normalizeEmail(email)

  // Find the user by email
  const user = await prisma.user.findUnique({
    where: { email: normalizedEmail },
    select: { type: true },
  })

  // Return user type if found, or default to user
  return createSuccessResponse({
    type: user?.type || 'user',
  })
})
