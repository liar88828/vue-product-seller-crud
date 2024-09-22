import { historyController } from "~/server/controllers/history.controller"
import type { DataMarket } from "~/types/market/order"

export default defineEventHandler(async (event) => {
  const data = {
    history: await historyController.detail(event),
    toJson(): { history: DataMarket } {
      return { history: this.history }
    },
  }
  return data
})
