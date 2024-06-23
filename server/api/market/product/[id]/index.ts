export default defineEventHandler(async (event) => {
  const { session } = await getUserSession(event)
  const data = {
    // product: await db.product.findAllId(session.id),
    product: await control.product.market.current.id(event),

    toJSON(): { product: ProductItemServer } {
      return {
        product: this.product,
      }
    },
  }
  return data
})
