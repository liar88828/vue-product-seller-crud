import { Services } from "../services/_index"
import { BoxController } from "./box"
import { ProductController } from "./product"
import { TransactionController } from "./transaction"
import { UserController } from "./user"
import { TrollyController } from "./user/trolly"

class Control {
  private readonly service = new Services()
  trans = new TransactionController(this.service.transaction)
  product = new ProductController(this.service.product)
  user = new UserController(this.service.user)
  market = new MarketController(this.service.market)
  auth = new AuthController(this.service.auth)
  trolly = new TrollyController(this.service.trolly)
  box = new BoxController(this.service.box)
}

export const control = new Control()
