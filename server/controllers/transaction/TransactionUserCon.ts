import type { Transaction } from "@prisma/client"
import type { TransactionServices } from "~/server/services/transaction"
import type { PayProps } from "~/types/market/order"
import type { H3Event } from "h3"
import { HistoryController } from "~/server/controllers/transaction/historyController"
import { TransactionMarketCon } from "./TransactionMarketCon"
import { MarketServices } from "~/server/services/user/market"
import { prisma } from "~/server/config/prisma"

export class TransactionUserCon {
  constructor(
    protected serviceTrans: TransactionServices,
    protected serviceMarket: MarketServices
  ) {}

  history = new HistoryController()

  async allProduct(id_user: string) {
    const transaction = await prisma.user.findUnique({
      where: { id: id_user },
      select: {
        Transaction: {
          include: {
            Box: {
              include: {
                Product: true,
              },
            },
          },
        },
      },
    })
    return transaction
  }

  async detail(id: string, id_buyer: string) {
    return db.trans.user.id({ id_buyer, id: Number(id) })
  }

  async all(id_buyer: string): Promise<Transaction[]> {
    return db.trans.user.all(id_buyer)
  }

  async delete(id: string, id_buyer: string) {
    return db.trans.user.delete({ id_buyer, id: Number(id) })
  }

  async pay(id: string, id_buyer: string) {
    return db.trans.user.pay({ id_buyer, id: Number(id) })
  }

  // async create(data: CreateTransaction): Promise<Transaction> {
  // const sanitize = service.transaction.sanitize(data)
  // return service.transaction.create(sanitize)
  // }

  async payDetail(event: H3Event): Promise<PayProps> {
    const { session } = await getUserSession(event)
    const { id } = getRouterParams(event)
    return {
      market: await this.serviceMarket.findFull(Number(session.id_market)),
      order: await db.trans.user.idDetail({
        id: Number(id),
        id_buyer: session.id,
      }),
    }
  }
}
