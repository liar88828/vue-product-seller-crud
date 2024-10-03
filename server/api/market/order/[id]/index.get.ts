import { type TransactionServer } from "~/types/trolley"

export default defineEventHandler(async (event) => {
  const data = {
    order: await orderController.marketOrderFindId(event),
    toJson(): TransactionServer {
      return this.order
    },
  }
  return data
})
