import 'next-auth'

declare module "next-auth" {
  export * from 'next-auth'
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    user: {
      firstName: string
      lastName: string
    }
  }
}