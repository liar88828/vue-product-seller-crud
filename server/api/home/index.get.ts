import type { HomeApi } from "~/types/home/props"

export default defineEventHandler(async (event) => {
  console.log(await getUserSession(event))
  const data = {
    // product: dataProducts,
    bestProduct: await productController.bestProduct(),
    newProduct: await productController.newProduct(),
    trending: await productController.trending(),
    // index: await control.home.(),
    toJson(): HomeApi {
      // return { data: this.index }
      return {
        bestProduct: this.bestProduct,
        newProduct: this.newProduct,
        trending: this.trending,
      }
    },
  }
  return data
})
