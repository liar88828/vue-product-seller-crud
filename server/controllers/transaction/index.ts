import type { Transaction } from "@prisma/client"
import type { H3Event } from "h3"
import { TransactionServices } from "../../services/transaction/index"

export class TransactionController {
  constructor(
    protected event: H3Event,
    protected service: TransactionServices,

    public market = new TransactionMarketCon(event, service),
    public user = new TransactionUserCon(event)
  ) {}

  async id(id: number) {
    return this.service.id(id)
  }

  async createTrans(data: Transaction) {
    return db.trans.create(data)
  }

  // change in class MarketOwner
  // async confirmTrans(data: Transaction) {
  //   return db.transaction.confirm(data)
  // }
  async allTrans() {
    return db.trans.all()
  }

  async allTransDetail(id_market: number) {
    return db.trans.id(id_market)
  }

  async detailTrans(id: number) {
    return db.trans.id(id)
  }
}
