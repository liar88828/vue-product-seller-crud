export class OrderService {
  constructor() {}

  async id({ id, id_buyer }: IdUserTrans) {
    return prisma.transaction.findUnique({
      where: { id, id_buyer },
    })
  }

  async add({ id, id_market }: IdMarketTrans, status: TStatus) {
    return prisma.transaction.update({
      where: { id, id_market },
      data: { status },
    })
  }

  async orderConfirmFindId({ id, id_market }: IdMarketTrans) {
    return prisma.transaction.findUnique({
      where: { id, id_market },
    })
  }
  async orderConfirmUpdate({ id, id_market }: IdMarketTrans, status: TStatus) {
    return prisma.transaction.update({
      where: { id, id_market },
      data: { status },
    })
  }
  async orderConfirmAll(
    id_market: number
    // session: SessionUser
  ): Promise<HistoryServer[]> {
    return prisma.transaction.findMany({
      where: {
        status: "PENDING",
        id_market: id_market,
      },
      include: {
        User: true,
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

  async userFindAll(session: SessionUser): Promise<HistoryServer[]> {
    return prisma.transaction.findMany({
      where: {
        id_buyer: session.id,
        status: "PENDING",
      },
      include: {
        User: true,
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
}

export const orderService = new OrderService()

export type IOrderService = OrderService
