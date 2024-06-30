export default defineEventHandler(async (event) => {
  const { session } = await getUserSession(event)
  const data = {
    // product: await db.product.findAllId(session.id),
    product: await control.market(event).owner.product.current.id(),

    toJSON(): { product: ProductItemServer } {
      return {
        product: this.product,
      }
    },
  }
  return data
})
