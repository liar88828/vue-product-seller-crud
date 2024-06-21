import type { User } from "@prisma/client"

export type CreateUserBasic = Omit<User, "id">
// export type UserCreate = Remove<User>
export type UserCreate = CreateUserBasic
// export type UserUpdate = User
export type UserAll = Omit<User, "password">
// export type UserUpdate = CreateUserBasic
