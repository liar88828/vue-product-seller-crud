// can find other market product
// by id param from market and product id
// return market product
//
export default defineEventHandler(async (event) => {
  const { id_product, id_market } = getRouterParams(event)
  console.log(id_market, id_product)
  const data = {
    product: await control.product.market.id(id_market, id_product),

    toJSON() {
      return {
        product: this.product,
      }
    },
  }
  return data
})
