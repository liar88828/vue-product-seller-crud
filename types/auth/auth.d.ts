import type { TRole } from "../globals/Status"
import type { SessionUser } from "../globals/session"

// auth.d.ts
declare module "#auth-utils" {
  interface User extends SessionUser {
    // id: string
    // id_market: number
    // id_like: number
    // id_trolly: number
    // id_role: string
    // id_follow: number
  }

  interface UserSession {
    // Add your own fields
    session: SessionUser
    loggedInAt: Date
    // role: TRole
    user: SessionUser
  }
}

export {}
