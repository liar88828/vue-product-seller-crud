import type { Transaction } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const data = {
    histories: await control.user(event).trans.all(),
    toJson(): { histories: Transaction[] } {
      return {
        histories: this.histories,
      }
    },
  }
  return data
})
