import type { Like } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    like: await likeController.id(event),

    toJson(): { like: Like | null } {
      return { like: this.like }
    },
  }
  return data
})
