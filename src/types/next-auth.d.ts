import { DefaultSession } from 'next-auth'

// Define UserType enum to match your Prisma schema
declare module 'next-auth' {
  /**
   * Extend the built-in session types
   */
  interface Session {
    user: {
      // Add the type property to the user object in session
      type?: string
    } & DefaultSession['user']
  }

  /**
   * Extend the built-in user types
   */
  interface User {
    // Add the type property to the User interface
    type?: string
  }
}

// Extend JWT interface
declare module 'next-auth/jwt' {
  interface JWT {
    // Add userType to the JWT
    userType?: string
  }
}
