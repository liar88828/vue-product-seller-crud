export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const data = {
    user: await db.user.findId(id),
    toJson() {
      return this.user
    },
  }
  return data
})
