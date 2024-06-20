export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const { session } =  await getUserSession(event)
  const market =  await control.market.owner.confirm(
    {
      id: Number(id),
      id_market: session.id_market as number,
    },
    "Accepted"
  )
  return { market }
})
