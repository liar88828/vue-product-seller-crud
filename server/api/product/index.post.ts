export default defineEventHandler(async (event) => {
  const data = {
    // product: dataProductDetails,
    product: await productController.create(event),

    toJSON() {
      return {
        product: this.product,
      }
    },
  }
  return data
})
