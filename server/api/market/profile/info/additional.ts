// will show market profile
// find by session user
// and find market from session user
// return market profile

import type { Additional } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    additional: await marketController.additional(event),
    toJson(): { additional: Additional[] } {
      return {
        additional: this.additional,
      }
    },
  }
  return data
})
