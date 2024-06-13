export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)

  const market = await service.market.confirm(id, "Cancelled")
  return { market }
})
// Waiting
// Pending
// Delivered
// Cancelled