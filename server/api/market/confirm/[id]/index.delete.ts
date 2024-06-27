export default defineEventHandler(async (event) => {
  const market = await control.market.owner.trans.order.apply(event, "CANCELED")
  return { market }
})
