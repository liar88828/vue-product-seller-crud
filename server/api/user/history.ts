import { dataOrders } from "~/assets/example/transaction/dataOrder"
import { prisma } from "~/server/config/prisma"

export default defineEventHandler(async (event) => {
  const session = "123"
  const res = await prisma.order.findMany({
    where: {
      id_user: session,
    },
    take: 100,
  })
  return { order: dataOrders }
})
