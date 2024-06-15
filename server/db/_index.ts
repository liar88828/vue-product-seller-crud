import { MarketDB } from "./company"
import { PackageDB } from "./package"

class DB {
  check = new CheckDB()

  user = new UserDB()
  product = new ProductDB()
  order = new OrderDB()
  preview = new PreviewDB()
  follow = new FollowDB()
  type = new TypeDB()
  market = new MarketDB()
  trolly = new TrollyDB()
  package = new PackageDB()
}

export const db = new DB()
