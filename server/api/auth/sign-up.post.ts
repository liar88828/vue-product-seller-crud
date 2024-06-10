export default defineEventHandler(async (event) => {
  try {
    return await service.user.signUp(await readBody(event))
  } catch (e: unknown) {
    console.error(e)
    return e
  }
})
