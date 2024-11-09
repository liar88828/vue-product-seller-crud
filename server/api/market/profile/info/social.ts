// will show market profile
// find by session user
// and find market from session user
// return market profile

import type { SocialMedia } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    social: await marketController.social(event),
    toJson(): { social: SocialMedia } {
      return {
        social: this.social,
      }
    },
  }
  return data
})
