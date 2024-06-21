import type { CreateTransaction } from "~/types/transaction"
import { TransactionSanitize } from "./TransactionSanitize"
import { TransactionUserServices } from "./TransactionUserServices"
import { TransactionMarketServices } from "./TransactionMarketServices"
import { prisma } from "~/server/config/prisma"
import type { Market } from "@prisma/client"
import type { TransactionId } from "~/types/transaction/trolly"

export class TransactionServices extends TransactionSanitize {
  user = new TransactionUserServices()
  market = new TransactionMarketServices()

  async id(id: number) {
    return db.trans.id(id)
  }

  async findId(id_market: number, id_user: string): Promise<Market> {
    const market = await prisma.market.findUnique({
      where: { id: id_market, User: { id: id_user } },
    })
    if (!market) {
      throw new Error("Market not found")
    }
    return market
  }

  async findIdTransaction(id_market: number): Promise<TransactionId> {
    const transaction = await prisma.transaction.findFirst({
      where: { id_market },
      include: {
        Box: {
          include: {
            Product: true,
          },
        },
      },
    })
    if (!transaction) {
      throw new Error("transaction not found")
    }
    return transaction
  }

  async allProduct(id_market: number, id_user: string): Promise<TransactionId> {
    const market = await this.findId(id_market, id_user)
    const transaction = await this.findIdTransaction(market.id)
    return transaction
  }
  async create(data: CreateTransaction) {
    return db.trans.create(data)
  }

  async delete(id: number) {
    return db.trans.delete(id)
  }
  // async user(id: IdUserTrans) {
  //   return db.trans.id(id)
  // }
  async all() {
    return db.trans.all()
  }
}
