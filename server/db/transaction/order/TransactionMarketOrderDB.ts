import { prisma } from "~/server/config/prisma"
import type { TStatus } from "~/types/globals/Status"
import type { IdMarketTrans } from "~/types/product/findId"

export class TransactionMarketOrderDB {
  async add({ id, id_market }: IdMarketTrans, status: TStatus) {
    return prisma.transaction.update({
      where: { id, id_market },
      data: { status },
    })
  }

  async idMarketFind(id_market: number) {
    return prisma.market
      .findUnique({
        where: { id: id_market },
        select: { id: true },
      })
      .then((data) => {
        if (!data) {
          throw createError({
            statusCode: 404,
            statusMessage: "Market not found",
          })
        }
        return data
      })
  }

  async id({ id, id_market }: IdMarketTrans) {
    return prisma.transaction.findUnique({
      where: { id, id_market },
    })
  }

  async all(id_market: number) {
    return prisma.transaction.findMany({
      where: { id_market },
    })
  }
}
