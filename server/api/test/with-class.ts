export default defineEventHandler(async (event) => {
  console.time()
  const user = await userController.idUserPublic(event)
  console.timeEnd()
  return user
})
