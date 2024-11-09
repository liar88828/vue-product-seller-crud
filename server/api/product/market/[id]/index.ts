import { type ProductItemServer } from "~/types/product/item"

export default defineEventHandler(async (event) => {
  const data = {
    product: await productController.marketDetail(event),
    toJSON(): { product: ProductItemServer } {
      return {
        product: this.product,
      }
    },
  }
  return data
})
