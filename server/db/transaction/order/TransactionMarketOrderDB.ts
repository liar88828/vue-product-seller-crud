import { prisma } from "~/server/config/prisma"
import type { TStatus } from "~/types/globals/Status"
import type { IdMarketTrans } from "~/types/product/findId"

export class TransactionMarketOrderDB {
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
