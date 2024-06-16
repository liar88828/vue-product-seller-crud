export default defineEventHandler(async (event) => {
  const session = await db.user.first()
  const { id } = getRouterParams(event)
  const data = {
    // product: dataProductDetails,
    product: await control.product.market.create(await readBody(event), {
      id_user: session.id,
      id_market: Number(id),
    }),

    toJSON() {
      return {
        product: this.product,
      }
    },
  }
  return data
})
