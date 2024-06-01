import type { Product } from "@prisma/client"
import { ZodType, z } from "zod"

export default () => {
  const createProductSchema = z.object({
    id: z.string(),
    //
    name: z.string(),
    description: z.string(),
    image: z.string(),
    brand: z.string(),
    price: z.number(),
    stock: z.number(),
    //
    userId: z.string(),
    typeId: z.string(),
  }) satisfies ZodType<Product>

  return { createProductSchema }
}
