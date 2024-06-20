// will show market profile
// find by session user
// and find market from session user
// return market profile

import type { MarketServerFullNull } from "~/types/market/ProfileCompany"

export default defineEventHandler(async (event) => {
  // try {
  const { session } = await getUserSession(event)
  const data = {
	market: await control.market.full(session.id),
	toJson(): { market: MarketServerFullNull } {
	  return {
		market: this.market
	  }
	},
  }
  return data
  // } catch (e) {
  //   createError({
  //     statusCode: 404,
  //     statusMessage: "Market is not found you must create new market first",
  //   })
  // }
})
