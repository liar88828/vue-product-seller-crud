import { dataProducts } from "~/assets/example/product/dataProduct"

export default defineEventHandler(async (event) => {
  const data = {
    product: await db.product.findTest(),

    toJSON() {
      return {
        product: this.product,
      }
    },
  }
  return data
})
