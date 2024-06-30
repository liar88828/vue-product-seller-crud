import type { DataMarket } from "~/types/market/order"

export default defineEventHandler(async (event) => {
  const data = {
    history: await control.market(event).owner.trans.detail(),
    toJson(): { history: DataMarket } {
      return { history: this.history }
    },
  }
  return data
})
