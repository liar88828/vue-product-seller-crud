import {
  TransactionUserCon,
  transactionUserController,
} from "./TransactionUserCon"
import type { Transaction } from "@prisma/client"
import {
  transactionService,
  TransactionService,
} from "../../services/transaction/index"
import {
  TransactionMarketCon,
  transactionMarketController,
} from "./TransactionMarketCon"

export class TransactionController {
  constructor(
    private serviceService: TransactionService,
    private market: TransactionMarketCon,
    private user: TransactionUserCon
  ) {}

  async id(id: number) {
    return this.serviceService.id(id)
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

export const transactionController = new TransactionController(
  transactionService,
  transactionMarketController,
  transactionUserController
)
