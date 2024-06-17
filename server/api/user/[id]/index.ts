export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)

  const data = {
    user: await control.user.id(id),
    toJson() {
      return this.user
    },
  }
  return data
})
