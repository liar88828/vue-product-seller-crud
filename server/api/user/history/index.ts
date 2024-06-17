import { dataOrders } from "~/assets/example/transaction/dataOrder"
import { prisma } from "~/server/config/prisma"

export default defineEventHandler(async (event) => {
  const session = await db.user.first()
  const data = {
    order: control.trans.user.all(session.id),
    toJson() {
      return this.order
    },
  }
  return data
})
