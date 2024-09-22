import { productController } from "~/server/controllers/product"
import type { Product } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    newProduct: await productController.newProduct(),
    toJson(): { newProduct: Product[] } {
      return {
        newProduct: this.newProduct,
      }
    },
  }
  return data
})
