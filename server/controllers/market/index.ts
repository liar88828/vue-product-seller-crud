import type {
  MarketServer,
  MarketServerFull,
} from "~/types/market/ProfileCompany"
import { tryCatch } from "../../lib/tryCatch"
import { MarketServices } from "../../services/user/market"
import { MarketUserController } from "./MarketUserController"
import { MarketOwnerController } from "./MarketOwnerController"

export class MarketController {
  protected service = new MarketServices()
  owner = new MarketOwnerController(this.service)
  user = new MarketUserController()
  async full(id_market: string): Promise<MarketServerFull> {
    return tryCatch(async () => {
      return this.service.findFull(Number(id_market))
    })
  }
  async id(id: string) {
    return tryCatch(async () => {
      return this.service.findId(Number(id))
    })
  }

  async create(id_user: string, data: MarketServer) {
    return tryCatch(async () => {
      data = this.service.marketCreate(data, id_user)
      return this.service.create(data)
    })
  }
}
