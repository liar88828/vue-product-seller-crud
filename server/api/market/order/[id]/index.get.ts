import { type TransactionServer } from "~/types/trolley"

export default defineEventHandler(async (event) => {
  const data = {
    order: await orderController.marketOrderId(event),
    toJson(): { order: TransactionServer } {
      return { order: this.order }
    },
  }
  return data
})
