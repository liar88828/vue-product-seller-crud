import type { Like, Product } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    like: await likeController.LikeProduct(event),
    toJson(): { like: Like } {
      return { like: this.like }
    },
  }
  return data
})
