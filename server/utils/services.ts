import { AuthServices } from "../services/auth"
import { HomeServices } from "../services/home"
import { MarketServices } from "../services/market"
import { SanitizeService } from "../services/sanitize"
import { ShopServices } from "../services/shop"
import { UserServices } from "../services/user"

class Services {
  user = new UserServices()
  auth = new AuthServices()
  market = new MarketServices()
  home = new HomeServices()
  shop = new ShopServices()
  sanitize = new SanitizeService()
}

export const service = new Services()
