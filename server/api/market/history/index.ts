import { dataOrders } from "~/assets/example/transaction/dataOrder"
import { prisma } from "~/server/config/prisma"
export default defineEventHandler(async (event) => {
  const res = prisma.order.findMany({
    take: 100,
  })
  return { history: dataOrders }
})
