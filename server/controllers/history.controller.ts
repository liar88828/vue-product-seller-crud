import type { Transaction } from "@prisma/client"
import type { H3Event } from "h3"

export class HistoryService {
  async idDetail(id: IdMarketTrans): Promise<DataMarket> {
    const data = await prisma.transaction.findUnique({
      where: { id: id.id, id_market: id.id_market },
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
}
export const historyService = new HistoryService()

export class HistoryController {
  constructor(private serviceHistory: HistoryService) {}

  async detail(event: H3Event): Promise<DataMarket> {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)
    return this.serviceHistory.idDetail({
      id_market: session.id_market,
      id: Number(id),
    })
  }

  async all(event: H3Event): Promise<HistoryServer[]> {
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
          const Box: HistoryServer["Box"] = d.Box.map((item) => {
            const { Product, ...ress } = item

            return {
              ...Product,
              ...ress,
            } satisfies HBoxProducts
          })

          return {
            ...d,
            userBuy: d.userBuy,
            Market: d.Market,
            Box,
          }
        })
      })
  }
  async userDelete(event: H3Event) {
    const { session } = await getUserSession(event)
    const { id } = getRouterParams(event)
    return db.trans.user.delete({ id_buyer: session.id, id: Number(id) })
  }

  async userAllId(event: H3Event): Promise<Transaction[]> {
    const { session } = await getUserSession(event)
    return db.trans.user.all(session.id)
  }

  async userAll(event: H3Event): Promise<HistoryServer[]> {
    const { session } = await getUserSession(event)
    return prisma.transaction
      .findMany({
        where: {
          id_buyer: session.id,
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
          const Box: HistoryServer["Box"] = d.Box.map((item) => {
            const { Product, ...ress } = item

            return {
              ...Product,
              ...ress,
            } satisfies HBoxProducts
          })

          return {
            ...d,
            userBuy: d.userBuy,
            Market: d.Market,
            Box,
          }
        })
      })
  }
}

export const historyController = new HistoryController(historyService)
