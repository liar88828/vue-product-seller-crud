import type { Market } from "@prisma/client"
import { type TransactionCheckoutClient } from "~/types/transaction"

export class TransactionService extends TransactionSanitize {
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

  async allProduct(
    id_market: number,
    id_user: string
  ): Promise<TransactionProduct> {
    const market = await this.findId(id_market, id_user)
    const transaction = await prisma.transaction.findFirst({
      where: { id_market },
      include: {
        Trolley: {
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
  async checkout(
    data: TransactionCheckoutClient,
    session: SessionUser
  ): Promise<{ transactionDB: TransactionServer }> {
    return prisma.$transaction(async (tx) => {
      const oneDay = new Date(Date.now() + 24 * 60 * 60 * 1000)

      const transactionDB = await tx.transaction.create({
        data: {
          status: "PENDING",
          discount: 0,
          dateExp: oneDay,
          promoCode: "",
          id_buyer: session.id,
          drop_address: data.transaction.drop_address,
          id_market: data.trolley[0].id_market,
        },
      })

      const trolleyDB = await tx.trolley.updateMany({
        where: {
          id: {
            in: data.trolley.map((d) => d.id_trolley),
          },
        },
        data: {
          id_transaction: transactionDB.id,
          mark: false,
        },
      })
      console.log(trolleyDB, transactionDB)
      return {
        trolleyDB,
        transactionDB,
      }
    })
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

  // async markerAll(id_market: number): Promise<DataMarket[]> {
  //   return db.trans.market.allDetail(id_market)
  // }
  // async markerDetail(id: IdMarketTrans): Promise<DataMarket> {
  //   return db.trans.market.idDetail(id)
  // }

  async userDetail(id: IdUserTrans) {
    return db.trans.user.id(id)
  }
  async userFindOrder(id: IdUserTrans) {
    return db.trans.user.id(id)
  }

  async userDelete(id: IdUserTrans) {
    return db.trans.user.delete(id)
  }
}

export const transactionService = new TransactionService()
export type ITransactionService = TransactionService
