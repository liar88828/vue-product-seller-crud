import { TrolleyDB } from "./user/trolley"

class DB {
  user = new UserDB()
  product = new ProductDB()
  preview = new PreviewDB()
  market = new MarketDB()
  trolley = new TrolleyDB()
  trans = new TransactionDB()
}

export const db = new DB()
