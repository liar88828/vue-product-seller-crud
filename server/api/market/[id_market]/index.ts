// can find other market
// by id param
// just find market
// and return all product and product market

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const data = {
    market: await control.market.id(id),
    toJson() {
      return this.market
    },
  }
  return data
})
