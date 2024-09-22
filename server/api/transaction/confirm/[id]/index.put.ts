export default defineEventHandler(async (event) => {
  const market = await orderController.marketApply(event, "ACCEPTED")
  return { market }
})
