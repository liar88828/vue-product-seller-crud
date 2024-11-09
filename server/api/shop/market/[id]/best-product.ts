import type { Product } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    bestProduct: await productController.bestProduct(),
    toJson(): { bestProduct: Product[] } {
      return {
        bestProduct: this.bestProduct,
      }
    },
  }

  return data
})
