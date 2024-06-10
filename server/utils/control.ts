import { BuyController } from "../controllers/buy"
import { ProductController } from "../controllers/product"
import { UserController } from "../controllers/user"
import { CheckDB } from "../db/check"

class Control {
  buy = new BuyController()
  check = new CheckDB()
  product = new ProductController()
  user = new UserController()
}

export const control = new Control()
