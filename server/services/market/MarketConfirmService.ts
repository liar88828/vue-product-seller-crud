import { prisma } from "~/server/config/prisma"

export class MarketConfirmService {
  async all(id_market: number): Promise<DataMarket[]> {
    const data = await prisma.transaction.findMany({
      where: {
        id_market,
      },
      include: {
        userBuy: true,
        Market: true,
        Box: {
          include: {
            Product: true,
          },
        },
      },
      take: 100,
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Order not found",
      })
    }
    return data
  }
}
