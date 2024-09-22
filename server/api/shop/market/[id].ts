export default defineEventHandler(async (event) => {
  const data = {
    bestProduct: await productController.bestProduct(),
    discount: await productController.discount(),
    newProduct: await productController.newProduct(),
    profile: await marketUserController.idLess(event),
    toJson(): ShopMarket {
      return {
        bestProduct: this.bestProduct,
        discount: this.discount,
        newProduct: this.newProduct,
        profile: this.profile,
      }
    },
  }

  return data
})
