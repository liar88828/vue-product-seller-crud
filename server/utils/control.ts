import { AuthController } from "../controllers/auth"
import { BuyController } from "../controllers/buy"
import { MarketController } from "../controllers/market"
import { ProductController } from "../controllers/product"
import { UserController } from "../controllers/user"
import { CheckDB } from "../db/check"

class Control {
  buy = new BuyController()
  check = new CheckDB()
  product = new ProductController()
  user = new UserController()
  auth = new AuthController()
  market = new MarketController()
}

export const control = new Control()
