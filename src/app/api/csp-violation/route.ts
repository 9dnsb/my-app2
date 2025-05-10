import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const violation = await req.json()

    console.warn(
      '🛡️ CSP Violation detected:',
      JSON.stringify(violation, null, 2)
    )

    // Optionally: save to database, Sentry, or alerting system
  } catch (error) {
    console.error('Failed to process CSP report:', error)
  }

  // Always respond with 204 No Content
  return new NextResponse(null, { status: 204 })
}
