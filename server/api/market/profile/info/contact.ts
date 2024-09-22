// will show market profile
// find by session user
// and find market from session user
// return market profile

import type { Contact } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    contact: await marketController.contact(event),
    toJson(): { contact: Contact } {
      return {
        contact: this.contact,
      }
    },
  }
  return data
})
