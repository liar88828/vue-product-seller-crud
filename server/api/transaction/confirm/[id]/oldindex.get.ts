import { prisma } from "~/server/config/prisma"
import type { DataMarketDesc } from "~/types/market/ProfileCompany"

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)

  const transaction = await prisma.transaction.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      Market: true,
      User: true,
      Box: true,
    },
  })

  const market: DataMarketDesc | null = await prisma.market.findUnique({
    where: {
      id: transaction?.Market.id,
    },
    include: {
      Contact: true,
      SocialMedia: true,
      Additional: true,
      Transaction: true,
    },
  })

  return {
    market,
  }
})
