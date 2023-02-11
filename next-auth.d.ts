import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    // idを追加
    user?: {
      id: string
    } & DefaultSession['user']
  }
}
