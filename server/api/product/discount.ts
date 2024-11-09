import { type Product } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    discount: await productController.discount(),
    toJson(): { discount: Product[] } {
      return {
        discount: this.discount,
      }
    },
  }
  return data
})
