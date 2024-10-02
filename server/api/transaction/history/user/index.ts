import type { HistoryServer } from "~/types/market/order"

export default defineEventHandler(async (event) => {
  const data = {
    histories: await historyController.allHistory(event),

    toJson(): { histories: HistoryServer[] } {
      return {
        histories: this.histories,
      }
    },
  }
  return data
})
