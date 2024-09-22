import type { ProductDetail } from "~/types/product/item"

export default defineEventHandler(async (event) => {
  const data = {
    product: await productController.detail(event),

    toJSON(): { product: ProductDetail } {
      return {
        product: this.product,
      }
    },
  }
  return data
})
