export default defineEventHandler(async (event) => {
  const market = await orderController.marketOrderApply(event, "ACCEPTED")
  return { market }
})
