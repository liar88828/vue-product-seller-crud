import { type Product } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    products: await productController.related(),
    toJson(): { products: Product[] } {
      return {
        products: this.products,
      }
    },
  }
  return data
})
