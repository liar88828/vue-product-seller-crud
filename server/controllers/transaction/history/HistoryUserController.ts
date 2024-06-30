import { prisma } from "~/server/config/prisma"
import type { H3Event } from "h3"

export class HistoryUserController {
  constructor(protected readonly event: H3Event) {}
  async all(): Promise<HistoryProps[]> {
    const { session } = await getUserSession(this.event)
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
          const Box: HistoryProps["Box"] = d.Box.map((item) => {
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
