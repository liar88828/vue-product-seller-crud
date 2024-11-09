import { ZodType, z } from "zod"
import type { IdValid } from "~/types/product/findId"

const stringNoSymbol = z
  .string()
  .min(1)
  .max(250) // Set the maximum length to 250, will be adjusted for each field
  .regex(/^[a-zA-Z0-9 ]*$/, "String cannot include symbols")

export const idNumber = z.number().min(1)
export const idString = z.string().uuid()
export const idValid = z.object({
  id: z.number().min(1),
  id_user: z.string().uuid(),
}) satisfies ZodType<IdValid>

export const MarketProductID = z.object({
  id_product: z.number().min(1),
  id_user: z.string().uuid(),
  id_market: z.number().min(1),
}) satisfies ZodType<FindIdProductCurrentMarket>

export const zods = {
  market: zodMarket,
  box: zodBox,
  product: zodProduct,
  user: zodUser,

  id: {
    number: idNumber,
    string: idString,
    valid: idValid,
    marketProduct: MarketProductID,
  },
}
