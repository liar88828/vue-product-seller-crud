import { type TransactionServer } from "~/types/trolley"

export default defineEventHandler(async (event) => {
  const data = {
    confirm: await confirmController.marketFindIdTransaction(event),
    toJson(): TransactionServer {
      return this.confirm
    },
  }
  return data
})
