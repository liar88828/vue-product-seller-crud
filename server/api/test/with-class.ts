export default defineEventHandler(async (event) => {
  console.time()
  const user = await userController.myProfile(event)
  console.timeEnd()
  return user
})
