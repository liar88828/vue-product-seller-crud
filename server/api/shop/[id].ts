import { dataProductDetailServer } from "~/assets/example/product/dataProduct"

export default defineEventHandler(async (event) => {
  // return { product: dataProductDetailServer }
  const { id } = getRouterParams(event)
  const data = {
    product: await control.product.detail(Number(id)),

    toJSON() {
      return {
        product: this.product,
      }
    },
  }
  return data
})
