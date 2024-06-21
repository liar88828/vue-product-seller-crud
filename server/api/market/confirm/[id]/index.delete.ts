export default defineEventHandler(async (event) => {
  const market = await control.market.owner.confirm(event, "CANCELED")
  return { market }
})
