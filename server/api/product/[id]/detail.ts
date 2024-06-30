export default defineEventHandler(async (event) => {
  // same with api/shop/1
  const data = {
    product: await control.user(event).product.detail(),
    // product: await db.product.findFull(Number(id)),

    toJSON() {
      return {
        product: this.product,
      }
    },
  }
  return data
})
