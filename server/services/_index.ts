import { AuthServices } from "./auth"
import { HomeServices } from "./home"
import { MarketServices } from "./market"
import { PackageService } from "./package"
import { ProductServices } from "./product"
import { SanitizeService } from "./sanitize"
import { TransactionServices } from "./transaction"
import { TrollyService } from "./trolly"
import { UserServices } from "./user"

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
