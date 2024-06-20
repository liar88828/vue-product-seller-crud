export default defineEventHandler(async (event) => {
  const { session } =  await getUserSession(event)
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
