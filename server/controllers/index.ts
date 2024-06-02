import { ProductController } from "~/server/controllers/product"
import { UserController } from "~/server/controllers/user"
import { CheckDB } from "~/server/db/check"
import { BuyController } from "./buy"

class Control {
  buy = new BuyController()
  check = new CheckDB()
  product = new ProductController()
  user = new UserController()
}

export const control = new Control()
