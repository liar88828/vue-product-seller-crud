import { HomeServices } from "../services/home"
import { MarketServices } from "../services/market"
import { UserServices } from "../services/user"

class Services {
  user = new UserServices()
  market = new MarketServices()
  home = new HomeServices()
}

export const service = new Services()
