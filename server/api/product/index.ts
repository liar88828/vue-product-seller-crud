export default defineEventHandler(async (event) => {
  const data = {
    // product: dataProductDetails,
    product: await productController.all(event),

    toJSON() {
      return {
        product: this.product,
      }
    },
  }
  return data
})
