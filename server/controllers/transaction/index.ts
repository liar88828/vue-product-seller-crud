import type { Transaction } from "@prisma/client"
import { TransactionServices } from "../../services/transaction"
import { TransactionUserCon } from "./TransactionUserCon"
import { TransactionMarketCon } from "./TransactionMarketCon"
import { MarketServices } from "~/server/services/user/market"

export class TransactionController extends TransactionUserCon {
  serviceTrans = new TransactionServices()
  serviceMarket = new MarketServices()
  user = new TransactionUserCon(this.serviceTrans, this.serviceMarket)
  market = new TransactionMarketCon(this.serviceTrans)
  order = {
    // confirm: super.confirmTransaction,
    // create: super.createTransaction,
    // detail: super.detailTransaction,
    // all: super.allTransaction,
    // allDetail: super.allTransactionDetail,
  }

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
