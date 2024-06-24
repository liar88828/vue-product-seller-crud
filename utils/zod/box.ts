import { ZodType, z } from "zod"
import type { BoxCreate, IdBox } from "~/types/transaction/trolly"

const id = z.object({
  id_trolly: z.number().min(1),
  id_product: z.number().min(1),
  id_box: z.number().min(1),
}) satisfies ZodType<IdBox>

const create = z.object({
  price: z.number(),
  id_trolly: z.number(),
  qty: z.number(),
  id_product: z.number(),
  // id_transaction: z.number(),
}) satisfies ZodType<BoxCreate>

export const zodBox = {
  id,
  create,
}
