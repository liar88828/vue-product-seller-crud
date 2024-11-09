export default defineEventHandler(async (event) => {
  const market = await orderController.marketOrderApply(event, "CANCELED")
  return { market }
})
