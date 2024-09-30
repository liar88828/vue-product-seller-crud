import { type IdStaticMarket } from "~/types/market/ProfileCompany"

export default defineEventHandler(async (event) => {
  const data = {
    count: await marketController.idMarketStatic(event),
    toJson(): {
      count: IdStaticMarket
    } {
      return {
        count: this.count,
      }
    },
  }

  return data
})
