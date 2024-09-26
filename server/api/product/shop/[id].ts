import { type Product } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    product: await productController.id(event),

    toJSON(): { product: Product } {
      return {
        product: this.product,
      }
    },
  }
  return data
})
