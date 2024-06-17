export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const session = await db.user.first()
  const data = {
    // product: dataProducts,
    confirm: await db.trans.market.confirm.id({
      id: Number(id),
      id_market: session.id_market as number,
    }),
    toJson() {
      return this.confirm
    },
  }
  return data
})
