class DB {
  user = new UserDB()
  product = new ProductDB()
  preview = new PreviewDB()
  market = new MarketDB()
  trolly = new TrollyDB()
  trans = new TransactionDB()
}

export const db = new DB()
