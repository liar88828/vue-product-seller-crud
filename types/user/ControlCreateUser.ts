import type { User } from "@prisma/client"

// export type UserCreate = Remove<User>
export type UserCreate = Omit<
  User,
  | "id"
  | "createMarket"
  | "activeOnline"
  | "OTP"
  | "id_market"
  | "id_like"
  | "id_trolly"
  | "id_role"
  | "id_follow"
  | "role"
>
export type UserUpdate = Omit<UserCreate, "password">
export type UserAll = Omit<User, "password">
// export type UserUpdate = CreateUserBasic
