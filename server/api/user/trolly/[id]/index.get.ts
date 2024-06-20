import type { BoxProduct } from "~/types/transaction/trolly";

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const { session } = await getUserSession(event)

  const data = {
	trolly: await control.trolly.productId(session.id, session.id_trolly, id),
	toJson(): { product: BoxProduct[] } {
	  return {
		product: this.trolly
	  }
	},
  }

  return data
})
