export default defineEventHandler(async (event) => {
  const session = await db.user.first()
  const { id } = getRouterParams(event)
  const data = {
    order: control.transaction.history.delete(id, session.id),
    toJson() {
      return this.order
    },
  }
  return data
})
