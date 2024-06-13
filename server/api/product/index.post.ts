export default defineEventHandler(async (event) => {
  const session = await db.user.first()

  const data = {
    // product: dataProductDetails,
    product: await control.product.createUser(
      await readBody(event),
      session.id
    ),

    toJSON() {
      return {
        product: this.product,
      }
    },
  }
  return data
})
