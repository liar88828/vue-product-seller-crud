import { CompanyDB } from "../db/company"
import { FollowDB } from "../db/follow"
import { OrderDB } from "../db/order"
import { PreviewDB } from "../db/preview"
import { ProductDB } from "../db/product"
import { TypeDB } from "../db/typeProduct"
import { UserDB } from "../db/user"

class DB {
  user = new UserDB()
  product = new ProductDB()
  order = new OrderDB()
  preview = new PreviewDB()
  follow = new FollowDB()
  type = new TypeDB()
  company = new CompanyDB()
}

export const db = new DB()
