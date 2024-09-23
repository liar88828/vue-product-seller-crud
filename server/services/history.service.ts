export class HistoryService {
  async marketAll(session: SessionUser): Promise<HistoryServer[]> {
    return prisma.transaction.findMany({
      where: {
        Market: {
          id_user: session.id,
        },
      },
      include: {
        userBuy: true,
        Market: true,
        Trolley: {
          include: {
            Product: true,
          },
        },
      },
      take: 100,
    })
  }

  async detailId({ id, id_market }: IdMarketTrans): Promise<HistoryServer> {
    const data = await prisma.transaction.findUnique({
      where: { id, id_market },
      include: {
        userBuy: true,
        Market: true,
        Trolley: {
          include: {
            Product: true,
          },
        },
      },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Order not found",
      })
    }
    return data
  }

  async userDetailId({ id, id_buyer }: IdUserTrans): Promise<HistoryServer> {
    const data = await prisma.transaction.findUnique({
      where: { id, id_buyer },
      include: {
        userBuy: true,
        Market: true,
        Trolley: {
          include: {
            Product: true,
          },
        },
      },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Order not found",
      })
    }
    return data
  }

  async userFindAll(id_user: string): Promise<HistoryServer[]> {
    const data = await prisma.transaction.findMany({
      where: { id_buyer: id_user },
      include: {
        userBuy: true,
        Market: true,
        Trolley: {
          include: {
            Product: true,
          },
        },
      },
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
export const historyService = new HistoryService()
export type IHistoryService = HistoryService
