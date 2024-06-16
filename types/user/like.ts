import type { Like } from "@prisma/client"

export type IdLike = Omit<Like, "id">
