export default defineEventHandler(async (event) => {
  const sessionId = "2"
  const user = await db.user.findId(sessionId)
  return { user }
})
