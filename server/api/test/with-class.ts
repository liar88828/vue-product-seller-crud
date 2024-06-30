export default defineEventHandler(async (event) => {
  console.time()
  const user = await control.user(event).profile.first()
  console.timeEnd()
  return user
})
