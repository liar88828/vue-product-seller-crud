import type { ProductDetail } from "~/types/product/item"

export default defineEventHandler(async (event) => {
  const data = {
    product: await productShopController.detail(event),

    toJSON(): { product: ProductDetail } {
      return {
        product: this.product,
      }
    },
  }
  return data
})
