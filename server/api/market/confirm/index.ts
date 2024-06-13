import { prisma } from "~/server/config/prisma"

export default defineEventHandler(async (event) => {
  const data = {
    confirm: await db.order.findConfirmFull(),

    toJSON() {
      return {
        market: this.confirm,
      }
    },
  }
  return data
})
