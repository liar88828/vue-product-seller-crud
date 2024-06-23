// find product all from market
// get di from session
//
import type { Product } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const data = {
	product: await control.product.market.current.create(event),
	toJSON(): { product: Product } {
	  return {
		product: this.product,
	  }
	},
  }
  return data
})
