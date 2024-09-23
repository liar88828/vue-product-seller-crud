import { ZodType, z } from "zod"
import { userId } from "./init.schema"

const id = z.object({
  id_trolley: z.number().min(1),
  id_product: z.number().min(1),
  // id_box: z.number().min(1),
  id_user: userId,
}) satisfies ZodType<IdTrolley>

const create = z.object({
  price: z.number(),
  id_trolley: z.number(),
  qty: z.number(),
  id_product: z.number(),
  // id_transaction: z.number(),
}) //satisfies ZodType<BoxCreate>

export const zodBox = {
  id,
  create,
}
