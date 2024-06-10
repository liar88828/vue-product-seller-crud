import { prisma } from "~/server/config/prisma"
import { DataCompany, DataMarket } from "~/types/market/confirm"

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)

  const market: DataMarket | null = await prisma.order.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      market: true,
      trolly: true,
      userBuy: true,
    },
  })

  const company: DataCompany | null = await prisma.company.findUnique({
    where: {
      id: market?.market.id,
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
