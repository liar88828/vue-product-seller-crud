import type { Product } from "@prisma/client"
import { dataProducts } from "~/assets/example/product/dataProduct"

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
