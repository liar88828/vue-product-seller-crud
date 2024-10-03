export default defineEventHandler(async (event) => {
  const data = {
    product: await productController.id(event),
    toJSON(): { product: ProductClient } {
      return {
        product: this.product,
      }
    },
  }
  return data
})
