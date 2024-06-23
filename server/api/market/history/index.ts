import type { DataMarket } from "~/types/market/order"

export default defineEventHandler(async (event) => {
  const data = {
	histories: await control.trans.market.all(event),

	toJson(): {
	  histories: DataMarket[] // TransProps
	} {
	  return { histories: this.histories }
	},
  }
  return data
})
