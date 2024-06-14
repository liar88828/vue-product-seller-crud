export default defineEventHandler(async (event) => {
  // same with api/shop/1
  const { id } = getRouterParams(event)
  const data = {
    product: await db.product.findFull(Number(id)),

    toJSON() {
      return {
        product: this.product,
      }
    },
  }
  return data
})
