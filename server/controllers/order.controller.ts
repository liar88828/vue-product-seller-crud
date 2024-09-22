import type { H3Event } from "h3"

export class OrderService {
  async id({ id, id_buyer }: IdUserTrans) {
    return prisma.transaction.findUnique({
      where: { id, id_buyer },
    })
  }
}
export const orderService = new OrderService()

export class OrderController {
  constructor(private serviceOrder: OrderService) {}

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
}

export const orderController = new OrderController(orderService)
