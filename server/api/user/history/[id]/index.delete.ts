export default defineEventHandler(async (event) => {
  const { session } =  await getUserSession(event)
  const { id } = getRouterParams(event)
  const data = {
    order: control.trans.user.delete(id, session.id),
    toJson() {
      return this.order
    },
  }
  return data
})
