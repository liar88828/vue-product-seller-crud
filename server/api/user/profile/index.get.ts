import type { User } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    user: await control.user(event).profile.id(),
    toJson(): { user: User } {
      return { user: this.user }
    },
  }
  return data
})
