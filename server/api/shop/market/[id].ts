export default defineEventHandler(async (event) => {
  const user = control.market(event).user
  const data = {
    bestProduct: await user.all(),
    discount: await user.all(),
    newProduct: await user.all(),
    profile: await user.idLess(),
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
