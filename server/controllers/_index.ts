import { Services } from "../services/_index"
import { BoxController } from "./box"
import { MarketController } from "./market"
import { ProductController } from "./product"
import { TransactionController } from "./transaction"
import { UserController } from "./user"
import { TrollyController } from "./user/trolly"
import { HomeController } from "~/server/controllers/home";


class Control {
  private readonly service = new Services()
  product = new ProductController()
  market = new MarketController()
  trans = new TransactionController(this.service.transaction)
  user = new UserController(this.service.user)
  auth = new AuthController(this.service.auth,

  )
  trolly = new TrollyController(this.service.trolly)
  box = new BoxController(this.service.box)
  home = new HomeController(this.service.home)
}

export const control = new Control()
