export default defineEventHandler(async (event) => {
  const market = await orderController.marketApply(event, "CANCELED")
  return { market }
})
