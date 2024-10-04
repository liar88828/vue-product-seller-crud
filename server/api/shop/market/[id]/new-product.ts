import { type Product } from "@prisma/client"

export default defineEventHandler(async (event) => {
  console.log("new product")
  const data = {
    newProduct: await productController.newProduct(),
    toJson(): { newProduct: Product[] } {
      return {
        newProduct: this.newProduct,
      }
    },
  }

  return data
})
