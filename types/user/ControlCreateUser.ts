import type { User } from "@prisma/client"
import type { Remove } from "../transaction/GetBox"

export type CreateUserBasic = Omit<
  User,
  "id" | "id_follow" | "id_like" | "id_trolly"
>
// export type UserCreate = Remove<User>
export type UserCreate = CreateUserBasic
// export type UserUpdate = User
export type UserUpdate = CreateUserBasic
