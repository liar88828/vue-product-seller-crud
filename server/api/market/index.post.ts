// can create market
// find by session user
// then validate in database
// if user don't have a market
// will redirect create to make market or not
// and will send market from api
// return market profile
export default defineEventHandler(async (event) => {
  const data = {
    market: await control.market.create(event),
    toJson() {
      return this.market
    },
  }
  return data
})
