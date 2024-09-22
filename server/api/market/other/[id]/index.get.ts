// can find other market
// by id param
// just find market
// and return all product and product market

import type { MarketServerFullNull } from "~/types/market/ProfileCompany"

export default defineEventHandler(async (event) => {
  const data = {
    market: await marketController.userId(event),
    toJson(): { market: MarketServerFullNull } {
      return {
        market: this.market,
      }
    },
  }
  return data
})
