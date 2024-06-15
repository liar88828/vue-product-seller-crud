import type { IdTransaction } from "~/types/product/findId"
import { TransactionServices } from "../services/transaction"

class OrderController {
  constructor(protected service: TransactionServices) {}
  async findOrder(id: IdTransaction) {
    return this.service.findOrder(id)
  }
}
export class TransactionController extends OrderController {
  constructor(protected service: TransactionServices) {
    super(service)
  }
  async history(id: IdTransaction) {
    return this.service.history(id)
  }
  async pay(id: IdTransaction) {
    return this.service.pay(id)
  }
}
