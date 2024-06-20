export default defineEventHandler(async (event) => {
  const { session } =  await getUserSession(event)
  const { id } = getRouterParams(event)

  const data = {
    pay: await control.trans.user.payDetail(id, session.id),
    toJson() {
      return this.pay
    },
  }
  return data
})
