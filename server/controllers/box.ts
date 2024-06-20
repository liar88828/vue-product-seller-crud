import type { BoxService } from "../services/transaction/box"
import type { CreateBox } from "~/types/market/order"

export class BoxController {
  constructor(protected service: BoxService) {}
  async push(id_transaction: number, packages: CreateBox) {
    const data = this.service.sanitizeLoop({
      id_transaction,
      box: packages.box,
    })
    return this.service.pushPackage(data)
  }
}
