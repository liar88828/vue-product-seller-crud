class DB {
  check = new CheckDB()

  user = new UserDB()
  product = new ProductDB()
  order = new OrderDB()
  preview = new PreviewDB()
  follow = new FollowDB()
  type = new TypeDB()
  company = new CompanyDB()
}

export const db = new DB()
