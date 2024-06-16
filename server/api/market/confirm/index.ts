export default defineEventHandler(async (event) => {
  const session = await db.user.first()
  const market = await db.market.findUser(session.id)
  const data = {
    confirm: await control.transaction.order.allDetail(market.id),

    toJSON() {
      return {
        market: this.confirm,
      }
    },
  }
  return data
})
