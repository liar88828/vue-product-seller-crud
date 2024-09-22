export default defineEventHandler(async (event) => {
  const data = {
    product: await productController.marketId(event),
    toJSON(): { product: ProductItemServer } {
      return {
        product: this.product,
      }
    },
  }
  return data
})
