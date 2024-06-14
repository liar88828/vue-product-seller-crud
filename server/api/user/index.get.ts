export default defineEventHandler(async (event) => {
  const session = await db.user.first()

  const data = {
    user: await control.user.id(session.id),
    toJson() {
      return this.user
    },
  }
  return data
})
