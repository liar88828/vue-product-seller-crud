import type { Like } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    like: await likeController.all(event),

    toJson(): { likes: Like[] } {
      return { likes: this.like }
    },
  }
  return data
})
