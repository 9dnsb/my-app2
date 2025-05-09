// src/lib/apiUtils.ts
import { NextResponse } from 'next/server'

/**
 * Standard headers for API responses
 */
const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'X-Content-Type-Options': 'nosniff',
  'Cache-Control': 'no-store, max-age=0',
}

/**
 * Creates a standardized error response
 */
export function createErrorResponse(
  message: string, 
  status: number = 400,
  additionalHeaders: Record<string, string> = {}
): NextResponse {
  return NextResponse.json(
    { message },
    {
      status,
      headers: { ...DEFAULT_HEADERS, ...additionalHeaders },
    }
  )
}

/**
 * Creates a standardized success response
 */
export function createSuccessResponse(
  data: any,
  status: number = 200,
  additionalHeaders: Record<string, string> = {}
): NextResponse {
  return NextResponse.json(
    data,
    {
      status,
      headers: { ...DEFAULT_HEADERS, ...additionalHeaders },
    }
  )
}

/**
 * Adds a deliberate delay to prevent timing attacks
 */
export async function simulateWork(minMs = 100, maxMs = 250): Promise<void> {
  const delay = minMs + Math.floor(Math.random() * (maxMs - minMs))
  return new Promise((resolve) => setTimeout(resolve, delay))
}

/**
 * Safe error logging for API routes
 */
export function logApiError(
  context: string, 
  error: any, 
  startTime?: number
): void {
  const errorObj: Record<string, unknown> = {
    message: (error as Error)?.message,
    context,
    timestamp: new Date().toISOString(),
  }

  // Include execution time if provided
  if (startTime) {
    errorObj.timeSpent = Date.now() - startTime
  }

  // Only include stack trace in development
  if (process.env.NODE_ENV !== 'production') {
    errorObj.stack = (error as Error)?.stack
  }

  console.error(`API Error [${context}]:`, errorObj)
}
