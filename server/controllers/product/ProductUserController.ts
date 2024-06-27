import { CheckOutDB } from "~/server/db/transaction/order/CheckOutDB"
import { ProductServices } from "../../services/product"

export class ProductUserController {
  checkOut = new CheckOutDB()
  trolly = new TrollyController()
  like = new UserLikeController()

  constructor(protected service: ProductServices) {
  }

  async comment() {
  }

  async rating() {
  }


}
