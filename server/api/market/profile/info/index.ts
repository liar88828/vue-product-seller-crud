// will show market profile
// find by session user
// and find market from session user
// return market profile

import type { Market } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    info: await marketController.info(event),
    toJson(): { info: Market } {
      return {
        info: this.info,
      }
    },
  }
  return data
})
