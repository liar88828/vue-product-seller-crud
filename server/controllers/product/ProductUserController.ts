import { CheckOutDB } from "~/server/db/transaction/order/CheckOutDB"
import { ProductServices } from "../../services/product"
import { ProductShopController } from "~/server/controllers/product/ProductShopController"
import type { H3Event } from "h3"
import { TrollyController } from "../user/trolly"
import { UserLikeController } from "../user/like"

export class ProductUserController extends ProductShopController {
  constructor(
    protected service: ProductServices,
    protected event: H3Event,
    public trolly = new TrollyController(event),
    public like = new UserLikeController(event)
  ) {
    super(event, service)
  }
  checkOut = new CheckOutDB()

  async comment() {}

  async rating() {}
}
