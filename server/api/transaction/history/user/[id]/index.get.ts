import type { Transaction } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    histories: await historyController.userAllId(event),
    toJson(): { histories: Transaction[] } {
      return {
        histories: this.histories,
      }
    },
  }
  return data
})
