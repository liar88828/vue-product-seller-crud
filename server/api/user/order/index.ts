export default defineEventHandler(async (event) => {
  const { session } =  await getUserSession(event)
  const data = {
    order: control.trans.user.all(session.id),
    toJson() {
      return this.order
    },
  }
  return data
})
