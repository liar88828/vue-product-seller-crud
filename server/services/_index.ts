import { AuthServices } from "./auth"
import { HomeServices } from "./home"
import { MarketServices } from "./user/market"
import { PackageService } from "./transaction/package"
import { ProductServices } from "./product"
import { SanitizeService } from "./sanitize"
import { TrollyService } from "./user/trolly"
import { UserServices } from "./user"
import { OrderServices } from "./transaction/order"
import { TransactionServices } from "./transaction"

export class Services {
  auth = new AuthServices()
  user = new UserServices()
  market = new MarketServices()
  home = new HomeServices()
  // shop = new ShopServices()
  sanitize = new SanitizeService()
  product = new ProductServices()
  transaction = new TransactionServices()
  trolly = new TrollyService()
  package = new PackageService()
  order = new OrderServices()
}

export const service = new Services()

export interface IService {
  auth: AuthServices
  user: UserServices
  market: MarketServices
  home: HomeServices
  sanitize: SanitizeService
  product: ProductServices
}
