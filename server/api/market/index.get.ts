// will show market profile
// find by session user
// and find market from session user
// return market profile

import type { MarketServerFull } from "~/types/market/ProfileCompany"

export default defineEventHandler(async (event) => {
  // try {
  const session = await db.user.first()
  const data = {
    market: await control.market.full(session.id),
    toJson(): { market: MarketServerFull } {
      return { market: this.market }
    },
  }
  return data
  // } catch (e) {
  //   createError({
  //     statusCode: 404,
  //     statusMessage: "Market is not found you must be create new market first",
  //   })
  // }
})
