export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const data = {
    product: await control.product.findId(Number(id)),

    toJSON() {
      return {
        product: this.product,
      }
    },
  }
  return data
})
