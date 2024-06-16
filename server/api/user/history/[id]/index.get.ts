export default defineEventHandler(async (event) => {
  const session = await db.user.first()
  const data = {
    order: control.transaction.history.all(session.id),
    toJson() {
      return this.order
    },
  }
  return data
})
