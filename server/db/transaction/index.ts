import type { Transaction } from "@prisma/client"
import { prisma } from "~/server/config/prisma"
import { TransactionUserDB } from "./TransactionUserDB"
import { TransactionMarketDB } from "./TransactionMarketDB"
import { TransactionTestDB } from "./TransactionTestDB"

export class TransactionDB extends TransactionTestDB {
  market = new TransactionMarketDB()
  user = new TransactionUserDB()

  async findAllMarket(id_market: number): Promise<Transaction[]> {
    const data = await prisma.transaction.findMany({
      where: { id_market },
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
}
