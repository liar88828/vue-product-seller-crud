// can find other market
// by id param
// just find market
// and return all product and product market

import type { MarketServerFullNull } from "~/types/market/ProfileCompany";

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const data = {
	market: await control.market.full(id),
	toJson(): { market: MarketServerFullNull } {
	  return {
		market: this.market
	  }
	},
  }
  return data
})
