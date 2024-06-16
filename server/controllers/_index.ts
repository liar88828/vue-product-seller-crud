import { Services } from "../services/_index"
import { PackageController } from "./package"
import { ProductController } from "./product"
import { TransactionController } from "./transaction"
import { UserController } from "./user"
import { TrollyController } from "./user/trolly"

class Control {
  private readonly service = new Services()
  transaction = new TransactionController(
    this.service.transaction,
    this.service.order
  )
  product = new ProductController(this.service.product)
  user = new UserController(this.service.user)
  market = new MarketController(this.service.market)
  auth = new AuthController(this.service.auth)
  trolly = new TrollyController(this.service.trolly)
  package = new PackageController(this.service.package)
}

export const control = new Control()
