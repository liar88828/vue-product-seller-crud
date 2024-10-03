import type { Transaction } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    history: await historyController.userId(event),
    toJson(): { history: HistoryServer } {
      return {
        history: this.history,
      }
    },
  }
  return data
})
