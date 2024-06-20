import type { BaseClass } from "~/types/globals/controller"
import type { CreateTransaction } from "~/types/transaction"
import { TransactionSanitize } from "./TransactionSanitize"
// import { TransactionUserServices } from "./TransactionUserServices"
import { TransactionMarketServices } from "./TransactionMarketServices"
import { TransactionUserServices } from "~/server/services/transaction/TransactionUserServices";

export class TransactionServices
  extends TransactionSanitize
  implements BaseClass
{
  // user = new TransactionUserServices()
  // market = new TransactionMarketServices()

  async id(id: number) {
    return db.trans.id(id)
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
