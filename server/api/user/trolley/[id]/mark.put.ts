import type { Trolley } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    trolly: await trolleyController.mark(event),
    toJson(): { trolley: Trolley } {
      return {
        trolley: this.trolly,
      }
    },
  }

  return data
})
