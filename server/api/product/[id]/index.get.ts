import type { ProductItem } from "~/types/product/item"

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)

  const data = {
    product: await control.product.findDetail(Number(id)),
    toJSON(): { product: ProductItem } {
      return { product: this.product }
    },
  }
  return data
})
