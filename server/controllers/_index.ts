import { Services } from "../services/_index"
import { MarketController } from "./market"
import { ProductController } from "./product"
import { UserController } from "./user"
import { HomeController } from "~/server/controllers/home"

class Control {
  private readonly service = new Services()
  product = new ProductController()
  market = new MarketController()
  // trans = new TransactionController()
  user = new UserController()
  auth = new AuthController(this.service.auth)
  // box = new BoxController(this.service.box)
  home = new HomeController(this.service.home)
}

export const control = new Control()
