export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const { session } = await getUserSession(event)
  const data = {
	// product: dataProducts,
	confirm: await control.market.owner.id({
	  id: Number(id),
	  id_market: session.id_market as number,
	}),
	toJson() {
	  return this.confirm
	},
  }
  return data
})
