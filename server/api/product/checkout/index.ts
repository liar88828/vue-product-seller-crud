export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const session = await db.user.first()
  const data = {
    product: await control.product.user.all(session.id, Number(id)),

    toJSON() {
      return {
        product: this.product,
      }
    },
  }
  return data
})
