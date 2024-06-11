export default defineEventHandler(async (event) => {
  const data = await service.home.index()
  setResponseStatus(event, 200)
  return data
})
