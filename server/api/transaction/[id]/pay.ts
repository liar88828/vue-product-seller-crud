export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const session = await db.user.first()
  return control.transaction.pay(id, session.id)
})
