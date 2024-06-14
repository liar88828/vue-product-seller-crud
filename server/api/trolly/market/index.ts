export default defineEventHandler(async (event) => {
  const session = await db.user.first()
  const market = await db.company.findUser(session.id)

  return {
    market,
  }
})
