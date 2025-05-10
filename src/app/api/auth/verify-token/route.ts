import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const token = searchParams.get('token')

  if (!token) {
    return redirect('/auth/verification-error?error=missing-token')
  }

  const user = await prisma.user.findFirst({
    where: { verificationToken: token },
  })

  if (!user) {
    return redirect('/auth/verification-error?error=invalid-token')
  }

  if (
    !user.verificationTokenExpiry ||
    new Date(user.verificationTokenExpiry) < new Date()
  ) {
    return redirect('/auth/verification-error?error=expired-token')
  }

  // Mark verified and clear token
  await prisma.user.update({
    where: { id: user.id },
    data: {
      emailVerified: new Date(),
      verifiedAt: new Date(),
      verificationToken: null,
      verificationTokenExpiry: null,
    },
  })

  return redirect('/auth/login?verified=true')
}
