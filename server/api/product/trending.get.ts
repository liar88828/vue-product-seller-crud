import { type Product } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    trending: await productController.trending(),
    toJson(): { trending: Product[] } {
      return {
        trending: this.trending,
      }
    },
  }
  return data
})
