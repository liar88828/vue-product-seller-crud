// can see
// get by session user
//
export default defineEventHandler(async (event) => {
  const session = await db.user.first()
  const { id } = getRouterParams(event)

  const data = {
    order: await control.transaction.pay(id, session.id),
    toJson() {
      return this.order
    },
  }
  return data
})
