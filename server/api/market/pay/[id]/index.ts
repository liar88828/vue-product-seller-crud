export default defineEventHandler(async (event) => {
  const data = {
    market: await orderUserController.findMarket(event),
    toJson(): { market: MarketServerFull } {
      return {
        market: this.market,
      }
    },
  }
  return data
})
