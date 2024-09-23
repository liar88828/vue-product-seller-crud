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
}

export const orderService = new OrderService()

export type IOrderService = OrderService
