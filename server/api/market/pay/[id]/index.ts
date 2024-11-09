export default defineEventHandler(async (event) => {
  const data = {
    market: await orderController.userFindMarket(event),
    toJson(): { market: MarketServerFull } {
      return {
        market: this.market,
      }
    },
  }
  return data
})
