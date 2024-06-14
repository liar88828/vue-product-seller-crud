import { ProductServices } from "./product"

class Services {
  user = new UserServices()
  auth = new AuthServices()
  market = new MarketServices()
  home = new HomeServices()
  // shop = new ShopServices()
  sanitize = new SanitizeService()
  product = new ProductServices()
}

export const service = new Services()
