export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const session = await db.user.first()
  const data = {
    product: await control.product.deleteId({
      id: Number(id),
      id_user: session.id,
    }),

    toJSON() {
      return {
        product: this.product,
      }
    },
  }
  return data
})
