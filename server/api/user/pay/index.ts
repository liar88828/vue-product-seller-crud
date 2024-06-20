export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const { session } =  await getUserSession(event)
  return control.trans.user.pay(id, session.id)
})
