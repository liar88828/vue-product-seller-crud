export default defineEventHandler(async (event) => {
  const market = await control.market(event).owner.trans.order.apply("ACCEPTED")
  return { market }
})
