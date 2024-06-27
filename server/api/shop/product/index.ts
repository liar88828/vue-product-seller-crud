import type { Product } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    product: await control.product.shop._all(event),

    toJSON(): { products: Product[] } {
      return {
        products: this.product,
      }
    },
  }
  return data
})
