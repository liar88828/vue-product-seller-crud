export default defineEventHandler(async (event) => {
  const data = {
    product: await productController.marketEdit(event),
    toJSON(): { product: ProductServer } {
      return {
        product: this.product,
      }
    },
  }
  return data
})
