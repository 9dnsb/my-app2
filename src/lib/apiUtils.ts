// src/lib/apiUtils.ts
import { NextRequest, NextResponse } from 'next/server'

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
 * @template T The type of data being returned
 */
export function createSuccessResponse<T>(
  data: T,
  status: number = 200,
  additionalHeaders: Record<string, string> = {}
): NextResponse {
  return NextResponse.json(data, {
    status,
    headers: { ...DEFAULT_HEADERS, ...additionalHeaders },
  })
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
  error: unknown,
  startTime?: number
): void {
  const errorObj: Record<string, unknown> = {
    context,
    timestamp: new Date().toISOString(),
  }

  // Type guard to handle error object properly
  if (error instanceof Error) {
    errorObj.message = error.message
    // Only include stack trace in development
    if (process.env.NODE_ENV !== 'production') {
      errorObj.stack = error.stack
    }
  } else {
    errorObj.message = String(error)
  }

  // Include execution time if provided
  if (startTime) {
    errorObj.timeSpent = Date.now() - startTime
  }

  console.error(`API Error [${context}]:`, errorObj)
}

// Update to this function in src/lib/apiUtils.ts

/**
 * Wrapper for API route handlers with standardized error handling
 */
export function createApiHandler<T>(
  handler: (req: Request | NextRequest) => Promise<T | Response>
) {
  return async (req: Request | NextRequest) => {
    const startTime = Date.now()

    try {
      return await handler(req)
    } catch (error) {
      logApiError('api-handler', error, startTime)

      // Add deliberate delay to prevent timing attacks
      await simulateWork()

      return createErrorResponse(
        'An error occurred. Please try again later.',
        500
      )
    }
  }
}
