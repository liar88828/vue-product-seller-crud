import { ProductDB } from "../db/product"
import { UserDB } from "../db/user"

class DB {
  user = new UserDB()
  product = new ProductDB()
}

export const db = new DB()
