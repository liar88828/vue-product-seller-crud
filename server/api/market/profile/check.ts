// will show market profile
// find by session user
// and find market from session user
// return market profile

import type { idMarketFind } from "~/types/market/ProfileCompany"

export default defineEventHandler(async (event) => {
  const data = {
    market: await marketController.getMarketId(event),
    toJson(): { market: idMarketFind } {
      return {
        market: this.market,
      }
    },
  }
  return data
})
