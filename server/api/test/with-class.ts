export default defineEventHandler(async (event) => {
  console.time()
  const user = await userController.profileId(event)
  console.timeEnd()
  return user
})
