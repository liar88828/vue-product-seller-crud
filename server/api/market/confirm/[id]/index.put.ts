export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)

  const market = await service.market.confirm(id, "Accepted")
  return { market }
})