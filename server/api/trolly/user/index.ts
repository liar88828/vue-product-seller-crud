export default defineEventHandler(async (event) => {
  const session = await db.user.first()
  const data = {
    trolly: await control.trolly.findTrolly(session.id),
    toJson() {
      return this.trolly
    },
  }

  return data
})
