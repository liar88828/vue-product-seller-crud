import type { ProductDetailServer } from "~/types/product/item"

export default defineEventHandler(async (event) => {
  const data = {
    product: await productController.detail(event),

    toJSON(): { product: ProductDetailServer } {
      return {
        product: this.product,
      }
    },
  }
  return data
})
