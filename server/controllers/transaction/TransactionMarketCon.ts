import { TransactionServices } from "../../services/transaction"
import { prisma } from "~/server/config/prisma"

export class TransactionMarketCon {
  constructor(public service: TransactionServices) {}
  async allProduct(id_market: number, id_user: string) {
    const market = await prisma.market.findUnique({
      where: { id: id_market, User: { id: id_user } },
    })
    if (!market) {
      throw new Error("Market not found")
    }
    const transaction = await prisma.transaction.findMany({
      where: { id_market: market.id },
      include: {
        Box: {
          include: {
            Product: true,
          },
        },
      },
    })
    return transaction
  }

  async all(id_market: number) {
    return db.trans.market.allDetail(id_market)
  }

  async detail(id: string, id_market: string) {
    return db.trans.market.idDetail({
      id_market: Number(id_market),
      id: Number(id),
    })
  }
}
