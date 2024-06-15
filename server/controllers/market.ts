import type {
  MarketServer,
  MarketServerFull,
  ProfileMarket,
} from "~/types/market/ProfileCompany"
import { tryCatch } from "../lib/tryCatch"
import { MarketServices } from "../services/market"

export class MarketController {
  constructor(private service: MarketServices) {}

  async findFull(id_user: string): Promise<MarketServerFull> {
    return tryCatch(async () => {
      return this.service.findFull(id_user)
    })
  }
  async profileId(id: string) {
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
  async updateProfile(
    id: string,
    data: MarketServer
  ): Promise<MarketServerFull> {
    return tryCatch(async () => {
      return this.service.updateProfile(Number(id), data)
    })
  }
}
