import type { ProductDetail } from "~/types/product/item"

export default defineEventHandler(async (event) => {
  // return { product: dataProductDetailServer }
  const { id } = getRouterParams(event)
  const data = {
    product: await control.product.shop.detail(Number(id)),

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
