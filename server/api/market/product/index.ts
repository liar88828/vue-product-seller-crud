// find product all from market
// get di from session
//
import type { Product } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    products: await control.market(event).owner.product.current.all(),
    toJSON(): { products: Product[] } {
      return {
        products: this.products,
      }
    },
  }
  return data
})
