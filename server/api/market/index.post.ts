// can create market
// find by session user
// then validate in database
// if user don't have a market
// will redirect create to make market or not
// and will send market from api
// return market profile
export default defineEventHandler(async (event) => {
  const { session } =  await getUserSession(event)
  const body = await readBody(event)
  console.log(body)
  const data = {
    market: await control.market.create(session.id, body),
    toJson() {
      return this.market
    },
  }
  return data
})
