import type { User } from "@prisma/client"
import type { Remove } from "../transaction/GetBox"

export type ControlCreateUser = Omit<User, "id" | "trollyId">
export type UserCreate = Remove<User>
export type UserUpdate = User
