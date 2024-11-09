import { z } from "zod"

export const userId = z.string().uuid()
