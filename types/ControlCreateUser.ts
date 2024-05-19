import type { User } from "@prisma/client"

export type ControlCreateUser = Omit<User, "id" | "trollyId">
