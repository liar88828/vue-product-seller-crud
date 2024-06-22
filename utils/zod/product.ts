import { ZodType, z } from "zod"
const stringNoSymbol = z
  .string()
  .min(1)
  .max(250) // Set the maximum length to 250, will be adjusted for each field
  .regex(/^[a-zA-Z0-9 ]*$/, "String cannot include symbols")

const id = z.object({
  id_user: z.string().uuid(),
  id_market: z.number().min(1),
}) satisfies ZodType<IdProduct>

const idMarketProduct = z.object({
  id_market: z.number().min(1),
  id_product: z.number().min(1),
}) satisfies ZodType<ProductMarketId>

const create = z.object({
  brand: z.string().min(3).max(20),
  description: z.string().min(3).max(250),
  id_market: z.number(),
  id_type: z.string().min(3).max(20),
  id_user: z.string().uuid(),
  image: z.string(),
  name: stringNoSymbol,
  price: z.number(),
  stock: z.number(),
}) satisfies ZodType<ProductMarketCreate>

const update = z.object({
  brand: z.string().min(3).max(20),
  description: z.string().min(3).max(250),
  id_market: z.number(),
  id_type: z.string().min(3).max(20),
  id_user: z.string().uuid(),
  image: z.string(),
  name: stringNoSymbol,
  price: z.number(),
  stock: z.number(),
}) satisfies ZodType<ProductMarketCreate>

export const zodProduct = {
  create,
  update,
  idMarketProduct,
  id,
}
