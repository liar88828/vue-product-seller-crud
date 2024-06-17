export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const session = await db.user.first()
  const market = await service.market.owner.confirm(
    {
      id: Number(id),
      id_market: session.id_market as number,
    },
    "Cancelled"
  )
  return { market }
})
