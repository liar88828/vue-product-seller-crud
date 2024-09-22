import { CheckOutDB } from "~/server/db/transaction/order/CheckOutDB"
import { ProductServices } from "../../services/product/ProductServices"
import { ProductShopController } from "~/server/controllers/product/ProductShopController"

export class ProductUserController extends ProductShopController {
  constructor(
    private serviceService: ProductServices // private serviceTrolly: TrolleyController,
  ) // private serviceLike: UserLikeController
  {
    super(serviceService)
  }
  checkOut = new CheckOutDB()

  async comment() {}

  async rating() {}
}

export const productUserController = new ProductUserController(
  productService
  // trolleyController,
  // likeController
)
