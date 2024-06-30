import type { Product } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    product: await control.user(event).product._all(),

    toJSON(): { products: Product[] } {
      return {
        products: this.product,
      }
    },
  }
  return data
})
