import type { ProductDetail } from "~/types/product/item"

export default defineEventHandler(async (event) => {
  // return { product: dataProductDetailServer }
  const data = {
    product: await control.product.shop.detail(event),

    toJSON(): { product: ProductDetail } {
      return {
        product: this.product,
        // detail: this.product.detail,
        // market: this.product.market,
        // previews: this.product.previews,
        // relateds: this.product.relateds,
        // static: this.product.static,
      }
    },
  }
  return data
})
