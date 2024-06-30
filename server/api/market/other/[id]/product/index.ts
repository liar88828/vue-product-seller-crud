// can find other market product
// by id param from market and product id
// return market product
//
export default defineEventHandler(async (event) => {
  const data = {
    product: await control.market(event).product.all(),

    toJSON() {
      return {
        product: this.product,
      }
    },
  }
  return data
})
