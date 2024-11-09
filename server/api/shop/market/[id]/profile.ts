export default defineEventHandler(async (event) => {
  const data = {
    profile: await marketController.idMarket(event),
    toJson(): { profile: MarketServer } {
      return {
        profile: this.profile,
      }
    },
  }

  return data
})
