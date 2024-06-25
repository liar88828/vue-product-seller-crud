import type { User } from "@prisma/client"

// export type UserCreate = Remove<User>
export type UserCreate = Omit<
  User,
  "id" | "createMarket" | "activeOnline" | "OTP"
>
// export type UserUpdate = User
export type UserAll = Omit<User, "password">
// export type UserUpdate = CreateUserBasic
