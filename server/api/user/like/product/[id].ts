import type { Product } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    product: await likeController.findAllProductLike(event),

    toJSON(): { products: LikeProduct[] } {
      return {
        products: this.product,
      }
    },
  }
  return data
})
