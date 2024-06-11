import { OrderDB } from "../db/order"
import { ProductDB } from "../db/product"
import { UserDB } from "../db/user"

class DB {
  user = new UserDB()
  product = new ProductDB()
  order = new OrderDB()
}

export const db = new DB()
