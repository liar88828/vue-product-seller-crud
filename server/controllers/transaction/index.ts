import type { Transaction } from "@prisma/client"
import { TransactionServices } from "../../services/transaction"

export class TransactionController {
  protected serviceTrans = new TransactionServices()

  market = new TransactionMarketCon()
  user = new TransactionUserCon(this.serviceTrans,)

  async id(id: number) {
	return this.serviceTrans.id(id)
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
