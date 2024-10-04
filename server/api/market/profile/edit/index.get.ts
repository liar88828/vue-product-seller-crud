// will show market profile
// find by session user
// and find market from session user
// return market profile

import { type Market } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    market: await marketController.findProfile(event),

    toJson(): { market: Market } {
      return {
        market: this.market,
      }
    },
  }
  return data
})
