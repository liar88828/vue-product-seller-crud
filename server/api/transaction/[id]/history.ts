export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const session = await db.user.first()
  return control.transaction.history({ id: Number(id), id_user: session.id })
})
