import type { H3Event } from "h3"

export class OrderService {
  async confirmMarketAll(id_market: number): Promise<DataMarket[]> {
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
  async id({ id, id_buyer }: IdUserTrans) {
    return prisma.transaction.findUnique({
      where: { id, id_buyer },
    })
  }
}
export const orderService = new OrderService()

export type IOrderService = OrderService

export class OrderController {
  constructor(private serviceOrder: OrderService) {}

  async userPay(event: H3Event) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)
    return db.trans.user.pay({ id_buyer: session.id, id: Number(id) })
  }
  async userFindMarket(event: H3Event): Promise<MarketServerFull> {
    const { session } = await getUserSession(event)
    return MarketServices.findFullStatic(Number(session.id_market))
  }

  async marketAll(event: H3Event): Promise<DataMarket[]> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      return this.serviceOrder.confirmMarketAll(Number(session.id_market))
    })
  }

  async marketApply(event: H3Event, status: TStatus) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)

    await db.trans.market.confirm.add(
      {
        id: Number(id),
        id_market: session.id_market,
      },
      status
    )
  }

  async all(event: H3Event): Promise<TransServer[]> {
    const { session } = await getUserSession(event)
    return prisma.transaction
      .findMany({
        where: {
          id_market: session.id_market,
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
      .then((data) => {
        return data.map((d) => {
          d.userBuy.OTP = ""
          d.userBuy.password = ""
          const Box: TransServer["Box"] = d.Box.map((item) => {
            const { Product, ...ress } = item

            return {
              Product: Product,
              ...ress,
            } satisfies TBoxProduct
          })

          return {
            ...d,
            userBuy: d.userBuy,
            Market: d.Market,
            Box,
          } satisfies TransServer
        })
      })
  }

  async detail(event: H3Event) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)
    return this.serviceOrder.id({ id_buyer: session.id, id: Number(id) })
  }

  async allProduct(id_user: string) {
    const transaction = await prisma.user.findUnique({
      where: { id: id_user },
      select: {
        Transaction: {
          include: {
            Box: {
              include: {
                Product: true,
              },
            },
          },
        },
      },
    })
    return transaction
  }

  async userOrderDetail(event: H3Event) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)
    return db.trans.user.id({ id_buyer: session.id, id: Number(id) })
  }

  async idDetail({ id, id_buyer }: IdUserTrans): Promise<DataMarket> {
    const data = await prisma.transaction.findUnique({
      where: { id, id_buyer },
      include: {
        userBuy: true,
        Market: true,
        Box: {
          include: { Product: true },
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
  async userPayDetail(event: H3Event): Promise<PayProps> {
    const { session } = await getUserSession(event)
    const { id } = getRouterParams(event)

    return {
      market: await MarketServices.findFullStatic(Number(session.id_market)),

      order: await this.idDetail({
        id: Number(id),
        id_buyer: session.id,
      }),
    }
  }
}

export const orderController = new OrderController(orderService)
