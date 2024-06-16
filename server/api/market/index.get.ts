// will show market profile
// find by session user
// and find market from session user
// return market profile

import type { MarketServerFull } from "~/types/market/ProfileCompany"

export default defineEventHandler(async (event) => {
  const session = await db.user.first()
  const data = {
    market: await control.market.full(session.id),
    toJson() {
      return this.market
    },
  }
  return data
})
