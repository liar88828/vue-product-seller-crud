import type { Transaction } from "@prisma/client"
import { TransactionServices } from "../../services/transaction"
import { TransactionUserCon } from "./TransactionUserCon"
import { TransactionMarketCon } from "./TransactionMarketCon"

export class TransactionController extends TransactionUserCon {
  service = new TransactionServices()
  user = new TransactionUserCon(this.service)
  market = new TransactionMarketCon(this.service)

  order = {
    // confirm: super.confirmTransaction,
    // create: super.createTransaction,
    // detail: super.detailTransaction,
    // all: super.allTransaction,
    // allDetail: super.allTransactionDetail,
  }

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
