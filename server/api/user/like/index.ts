import type { Like } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    like: await control.user(event).like.all(),

    toJson(): { likes: Like[] } {
      return { likes: this.like }
    },
  }
  return data
})
