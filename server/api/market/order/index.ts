// Can see all order of user want buy

import { prisma } from "~/server/config/prisma"

// find by market id from session id
export default defineEventHandler(async (event) => {
  const session = await db.user.first()
  const market = await db.market.findUser(session.id)
  const order = await prisma.order.findMany({
    where: { id_market: market.id },
  })
  const product = await prisma.product.findMany({
    where: { id_order: { in: order.map((item) => item.id) } },
  })

  return {
    order,
    product,
    market,
    user: session,
  }
})
