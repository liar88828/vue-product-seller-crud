// find product all from market
// get di from session
//
import type { Product } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    products: await productController.ownerAll(event),
    toJSON(): { products: Product[] } {
      return {
        products: this.products,
      }
    },
  }
  return data
})
