import type { TRole } from "../globals/Status"
import type { SessionUser } from "../globals/session"

// auth.d.ts
declare module "#auth-utils" {
  interface User {
    // Add your own fields
    //   data: SessionUser
    //   loggedInAt: string
  }

  interface UserSession {
    // Add your own fields
    // user: SessionUser
    session: SessionUser
    loggedInAt: Date
    // role: TRole
  }
}

export {}
