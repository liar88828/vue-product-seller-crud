import type {
  MarketServer,
  MarketServerFull,
  ProfileMarket,
} from "~/types/market/ProfileCompany"
import { tryCatch } from "../lib/tryCatch"
import { MarketServices } from "../services/user/market"

class MarketUserController {}

class MarketOwnerController extends MarketUserController {
  constructor(public service: MarketServices) {
    super()
  }
  async update(id: string, data: MarketServer): Promise<MarketServerFull> {
    return tryCatch(async () => {
      return this.service.updateProfile(Number(id), data)
    })
  }
}
export class MarketController extends MarketOwnerController {
  constructor(public service: MarketServices) {
    super(service)
  }

  async full(id_user: string): Promise<MarketServerFull> {
    return tryCatch(async () => {
      return this.service.findFull(id_user)
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
