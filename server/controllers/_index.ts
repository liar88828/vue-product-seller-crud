class Control {
  buy = new BuyController()
  product = new ProductController()
  user = new UserController()
  auth = new AuthController()
  market = new MarketController()
}

export const control = new Control()
