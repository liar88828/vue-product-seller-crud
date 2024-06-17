import { ProductDB } from "./product"
import { PreviewDB } from "./product/preview"
import { TypeDB } from "./product/type"
import { TransactionDB } from "./transaction"

import { BoxDB } from "./transaction/box"
import { UserDB } from "./user"
import { MarketDB } from "./user/market"
import { FollowDB } from "./user/follow"
import { LikeDB } from "./user/like"
import { TrollyDB } from "./user/trolly"

class DB {
  check = new CheckDB()
  user = new UserDB()
  product = new ProductDB()
  // order = new OrderDB()
  preview = new PreviewDB()
  follow = new FollowDB()
  type = new TypeDB()
  market = new MarketDB()
  trolly = new TrollyDB()
  box = new BoxDB()
  trans = new TransactionDB()
  like = new LikeDB()
}

export const db = new DB()
