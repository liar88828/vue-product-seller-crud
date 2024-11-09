// will show market profile
// find by session user
// and find market from session user
// return market profile

export default defineEventHandler(async (event) => {
  const data = {
    marketStatic: await marketController.marketStatic(event),

    toJson() {
      return {
        marketStatic: this.marketStatic,
      }
    },
  }
  return data
})
