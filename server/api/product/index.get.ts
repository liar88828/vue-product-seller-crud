import type { Product } from "@prisma/client"
import type { ProductDetail } from "~/types/product/item"

export default defineEventHandler(async (event) => {
  const data = {
    product: await control.product.shop.all("search something ?"),

    toJSON(): { products: Product[] } {
      return {
        products: this.product,
      }
    },
  }
  return data
})
