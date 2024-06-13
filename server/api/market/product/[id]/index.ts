export default defineEventHandler(async (event) => {
  const session = await db.user.first()
  const data = {
    product: await db.product.findAllId(session.id),

    toJSON() {
      return {
        product: this.product,
      }
    },
  }
  return data
})
