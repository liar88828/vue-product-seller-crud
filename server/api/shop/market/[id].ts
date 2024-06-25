export default defineEventHandler(async (event) => {
  const data = {
    bestProduct: await control.market.user.all(event),
    discount: await control.market.user.all(event),
    newProduct: await control.market.user.all(event),
    profile: await control.market.user.idLess(event),
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
