// src/app/api/admin/submissions/route.ts
import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import prisma from '@/lib/prisma'

export async function GET() {
  const session = await auth()

  if (!session?.user || session.user.type !== 'admin') {
    console.warn(
      `[SECURITY] Unauthorized access attempt by user: ${
        session?.user?.email ?? 'unknown'
      }`
    )

    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const submissions = await prisma.submission.findMany({
    include: {
      user: {
        select: {
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return NextResponse.json({
    submissions: submissions.map((submission) => ({
      id: submission.id,
      userEmail: submission.user.email,
      formName: submission.formName,
      data: submission.data,
      createdAt: submission.createdAt,
    })),
  })
}
