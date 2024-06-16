// can find other market product
// by id param from market and product id
// return market product
//
export default defineEventHandler(async (event) => {
  const { id, id_product } = getRouterParams(event)
  console.log(id, id_product)
  const data = {
    product: await control.product.market.all(id),

    toJSON() {
      return {
        product: this.product,
      }
    },
  }
  return data
})
