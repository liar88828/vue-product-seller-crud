import type { Product } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    likes: await likeController.findAllProductLike(event),

    toJSON(): { likes: LikeProduct[] } {
      return {
        likes: this.likes,
      }
    },
  }
  return data
})
