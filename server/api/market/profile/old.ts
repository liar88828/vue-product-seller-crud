// will show market profile
// find by session user
// and find market from session user
// return market profile

import type { MarketServerFull } from "~/types/market/ProfileCompany"

export default defineEventHandler(async (event) => {
  const data = {
    market: await marketController.full(event),
    toJson(): { market: MarketServerFull } {
      return {
        market: this.market,
      }
    },
  }
  return data
})
