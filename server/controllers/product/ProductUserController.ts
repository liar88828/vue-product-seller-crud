import { CheckOutDB } from "~/server/db/transaction/CheckOutDB"
import { ProductServices } from "../../services/product"

export class ProductUserController extends CheckOutDB {
  constructor(protected service: ProductServices) {
    super()
  }

  async comment() {}
  async rating() {}
}
