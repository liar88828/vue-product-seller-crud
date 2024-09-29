import type { Trolley } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    trolley: await trolleyController.findAllMark(event),
    toJson(): { trolley: TrolleyProduct[] } {
      return {
        trolley: this.trolley,
      }
    },
  }

  return data
})
