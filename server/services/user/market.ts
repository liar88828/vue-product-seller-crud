import type {
  MarketServer,
  MarketServerFull,
} from "~/types/market/ProfileCompany"
import { MarketOwner } from "./MarketOwner"
import { MarketStaticService } from "./MarketStaticService"

export class MarketServices extends MarketStaticService {
  owner = new MarketOwner()
  async create(data: MarketServer) {
    data = zods.companyCreate.parse(data)
    return db.market.create(data)
  }

  async findId(id: number) {
    id = zods.idNumber.parse(id)
    return db.market.findId(id)
  }

  async findFull(id_market: number): Promise<MarketServerFull> {
    id_market = zods.idNumber.parse(id_market)
    return db.market.findFull(id_market)
  }

  async updateProfile(
    id_market: number,
    data: MarketServer
  ): Promise<MarketServerFull> {
    id_market = zods.idNumber.parse(id_market)
    data = this.updateMarketProfile(data)
    return db.market.updateProfile(id_market, data)
  }
}
