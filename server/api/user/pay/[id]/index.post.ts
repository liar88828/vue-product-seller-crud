// can see
// get by session user
//
export default defineEventHandler(async (event) => {
  const { session } =  await getUserSession(event)
  const { id } = getRouterParams(event)

  const data = {
    order: await control.trans.pay(id, session.id),
    toJson() {
      return this.order
    },
  }
  return data
})
