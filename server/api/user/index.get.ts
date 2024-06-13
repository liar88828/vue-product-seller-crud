export default defineEventHandler(async (event) => {
  const session = await db.user.first()

  const data = {
    user: await db.user.findAll(),
    toJson() {
      return this.user
    },
  }
  return data
})
