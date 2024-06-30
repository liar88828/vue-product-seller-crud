import type { Like } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    like: await control.user(event).like.id(),

    toJson(): { like: Like[] } {
      return { like: this.like }
    },
  }
  return data
})
