import { MarketServices } from "~/server/services/market/_index"
import type { H3Event } from "h3"
import type { PayProps, TBoxProduct, TransProps } from "~/types/market/order"
import { prisma } from "~/server/config/prisma"

export class OrderUserController {
  constructor(protected readonly event: H3Event) {}

  async detail() {
    const { id } = getRouterParams(this.event)
    const { session } = await getUserSession(this.event)
    return db.trans.user.id({ id_buyer: session.id, id: Number(id) })
  }

  async all(): Promise<TransProps[]> {
    const { session } = await getUserSession(this.event)
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
          const Box: TransProps["Box"] = d.Box.map((item) => {
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
          } satisfies TransProps
        })
      })
  }

  async payDetail(): Promise<PayProps> {
    const { session } = await getUserSession(this.event)
    const { id } = getRouterParams(this.event)
    return {
      market: await MarketServices.findFullStatic(Number(session.id_market)),
      order: await db.trans.user.idDetail({
        id: Number(id),
        id_buyer: session.id,
      }),
    }
  }

  async pay() {
    const { id } = getRouterParams(this.event)
    const { session } = await getUserSession(this.event)
    return db.trans.user.pay({ id_buyer: session.id, id: Number(id) })
  }
}
