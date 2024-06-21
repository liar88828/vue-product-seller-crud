// Can see all order of user want buy

// find by market id from session id
export default defineEventHandler(async (event) => {
  const data = {
    data: await control.trans.market.allProduct(event),
    toJson() {
      return this.data
    },
  }
  return data
})
