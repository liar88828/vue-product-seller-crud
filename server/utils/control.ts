import { BuyController } from "../controllers/buy"
import { ProductController } from "../controllers/product"
import { Sanitize } from "../controllers/sanitize"
import { UserController } from "../controllers/user"
import { CheckDB } from "../db/check"

class Control {
  buy = new BuyController()
  check = new CheckDB()
  product = new ProductController()
  user = new UserController()
  sanitize = new Sanitize()
}

export const control = new Control()
