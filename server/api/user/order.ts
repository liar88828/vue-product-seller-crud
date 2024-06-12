import { prisma } from "~/server/config/prisma"
import { dataOrders } from "~/assets/example/transaction/dataOrder"

export default defineEventHandler(async (event) => {
  const session = "123"
  const res = await prisma.order.findMany({
    where: {
      id_user: session,
    },
  })
  return { order: dataOrders }
})
