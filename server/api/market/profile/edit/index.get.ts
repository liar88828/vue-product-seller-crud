// will show market profile
// find by session user
// and find market from session user
// return market profile

export default defineEventHandler(async (event) => {
  const data = {
    market: await marketController.findProfileEdit(event),

    toJson(): { market: MarketServiceSingle } {
      return {
        market: this.market,
      }
    },
  }
  return data
})
