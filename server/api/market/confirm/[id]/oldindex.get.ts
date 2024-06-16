import { prisma } from "~/server/config/prisma"
import type { DataMarketDesc } from "~/types/market/ProfileCompany"

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)

  const market = await prisma.order.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      Market: true,
      Product: true,
      userBuy: true,
    },
  })

  const company: DataMarketDesc | null = await prisma.market.findUnique({
    where: {
      id: market?.Market.id,
    },
    include: {
      Contact: true,
      SocialMedia: true,
      Additional: true,
      Order: true,
    },
  })

  return {
    market,
    company,
  }
})
