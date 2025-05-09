import prisma from '@/lib/prisma'
import { normalizeEmail } from '@/lib/validation'
import {
  createErrorResponse,
  createSuccessResponse,
  logApiError,
} from '@/lib/apiUtils'

export async function POST(req: Request) {
  try {
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
  } catch (error) {
    logApiError('check-user-type', error)

    // If there's an error, default to user type
    return createSuccessResponse({ type: 'user' })
  }
}
