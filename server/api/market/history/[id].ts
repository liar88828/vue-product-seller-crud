import type { DataMarket } from "~/types/market/order"
export default defineEventHandler(async (event) => {
  const data = {
    history: await control.trans.market.detail(event),

    toJson(): { history: DataMarket } {
      return { history: this.history }
    },
  }
  return data
})
