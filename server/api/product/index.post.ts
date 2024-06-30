export default defineEventHandler(async (event) => {
  const data = {
    // product: dataProductDetails,
    product: await control.market(event).owner.product.current.create(),

    toJSON() {
      return {
        product: this.product,
      }
    },
  }
  return data
})
