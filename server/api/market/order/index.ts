// Can see all order of user want buy

// find by market id from session id
export default defineEventHandler(async (event) => {
  const { session } =  await getUserSession(event)
  const data = {
    // product: dataProducts,
    data: await control.trans.market.allProduct(
      session.id_market as number,
      session.id
    ),
    toJson() {
      return this.data
    },
  }
  return data
})
