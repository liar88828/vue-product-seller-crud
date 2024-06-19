import { CheckOutDB } from "~/server/db/transaction/CheckOutDB"
import { ProductServices } from "../../services/product"

export class ProductUserController {
  constructor(protected service: ProductServices) {}
  checkOut = new CheckOutDB()
  async comment() {}
  async rating() {}
}
