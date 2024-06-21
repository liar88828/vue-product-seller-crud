import type { User } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    user: await control.user.profile.id(event),
    toJson(): { user: User } {
      return { user: this.user }
    },
  }
  return data
})
