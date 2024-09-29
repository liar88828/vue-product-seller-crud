import type { Market } from "@prisma/client"

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
  async create(
    data: CreateTransaction,
    trolley: {
      id_trolley: number
      id_market: number
    }[],
    session: SessionUser
  ) {
    return prisma.$transaction(async (tx) => {
      const transactionDB = await tx.transaction.create({
        data: {
          status: "Pending",
          discount: 0,
          dateExp: new Date(30),
          promoCode: "",
          id_buyer: session.id,
          drop_address: data.drop_address,
          id_market: trolley[0].id_market,
        },
      })

      const trolleyDB = await tx.trolley.updateMany({
        where: {
          id: {
            in: [1, 2, 3],
          },
        },
        data: {
          id_transaction: transactionDB.id,
          mark: false,
        },
      })

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
