import type { Transaction } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const { session } =  await getUserSession(event)
  const data = {
    histories: await control.trans.user.all(session.id),
    toJson(): { histories: Transaction[] } {
      return {
        histories: this.histories
      }
    },
  }
  return data
})
