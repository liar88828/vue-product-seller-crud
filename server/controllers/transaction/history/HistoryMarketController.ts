import { H3Event } from "h3"
import { prisma } from "~/server/config/prisma"
import type { HistoryServer } from "~/types/market/order"

export class HistoryMarketController {
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
}

export const historyMarketController = new HistoryMarketController()
