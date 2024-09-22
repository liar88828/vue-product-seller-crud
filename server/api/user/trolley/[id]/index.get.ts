import type { BoxProduct } from "~/types/transaction/trolly"

export default defineEventHandler(async (event) => {
  const data = {
    trolly: await trolleyController.productId(event),
    toJson(): { product: BoxProduct[] } {
      return {
        product: this.trolly,
      }
    },
  }

  return data
})
