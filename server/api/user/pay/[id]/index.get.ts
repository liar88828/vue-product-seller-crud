export default defineEventHandler(async (event) => {
  const session = await db.user.first()
  const { id } = getRouterParams(event)

  const data = {
    pay: await control.trans.user.payDetail(id, session.id),
    toJson() {
      return this.pay
    },
  }
  return data
})
