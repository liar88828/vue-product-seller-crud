// can find other market
// by id param
// just find market
// and return all product and product market

export default defineEventHandler(async (event) => {
  const data = {
    market: await marketController.fullSingleId(event),

    toJson(): { market: MarketServiceSingle } {
      return {
        market: this.market,
      }
    },
  }
  return data
})
