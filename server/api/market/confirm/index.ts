import { prisma } from "~/server/config/prisma"
import { DataMarket } from "~/types/market/confirm"

export default defineEventHandler(async (event) => {
  const market: DataMarket[] = await prisma.order.findMany({
    include: {
      market: true,
      trolly: true,
      userBuy: true,
    },
  })

  return { market }
})
