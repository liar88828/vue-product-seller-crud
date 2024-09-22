import { type Product } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    bestSeller: await productController.bestSeller(),
    toJson(): { bestProduct: Product[] } {
      return {
        bestProduct: this.bestSeller,
      }
    },
  }
  return data
})
