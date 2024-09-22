// will show market profile
// find by session user
// and find market from session user
// return market profile

export default defineEventHandler(async (event) => {
  const data = {
    marketStatic: await marketController.marketStatic(event),

    toJson(): { marketStatic: StaticServer } {
      return {
        marketStatic: this.marketStatic,
      }
    },
  }
  return data
})
