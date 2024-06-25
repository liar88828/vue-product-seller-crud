import { CheckOutDB } from "~/server/db/transaction/CheckOutDB"
import { ProductServices } from "../../services/product"
import type { H3Event } from "h3"

export class ProductUserController {
  constructor(protected service: ProductServices) {}
  checkOut = new CheckOutDB()
  async comment() {}
  async rating() {}
}
