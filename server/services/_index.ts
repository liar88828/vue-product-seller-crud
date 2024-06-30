export class Services {
  _static = new MarketStaticService()
  product = new ProductServices()

  auth = new AuthServices()
  home = new HomeServices()
  user = new UserServices(this.product)
  trans = new TransactionServices()
  market = new MarketServices(this._static, this.product, this.trans)
}
