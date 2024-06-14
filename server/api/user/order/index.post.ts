import { prisma } from "~/server/config/prisma"
import { dataOrders } from "~/assets/example/transaction/dataOrder"

// can see
// get by session user
//
export default defineEventHandler(async (event) => {
  const session = await db.user.first()
  // const res = await prisma.order.upsert({
  //   where: {
  //     id_user: session.id,
  //   },
  //   create: {
  //     // id_user: session.id,
  //     // userBuy

  //   },
  //   update: {},
  // })
  return { order: dataOrders }
})
