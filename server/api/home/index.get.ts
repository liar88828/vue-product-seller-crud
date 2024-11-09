import type { HomeApi } from "~/types/home/props"

export default defineEventHandler(async (event) => {
  const data = {
    bestProduct: await productController.bestProduct(),
    newProduct: await productController.newProduct(),
    trending: await productController.trending(),
    toJson(): HomeApi {
      return {
        bestProduct: this.bestProduct,
        newProduct: this.newProduct,
        trending: this.trending,
      }
    },
  }
  return data
})
