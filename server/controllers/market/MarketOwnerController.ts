import type {
  MarketServer,
  MarketServerFull,
} from "~/types/market/ProfileCompany"
import { tryCatch } from "../../lib/tryCatch"
import { MarketServices } from "../../services/user/market"

export class MarketOwnerController {
  constructor(protected service: MarketServices) {}
  async update(id: string, data: MarketServer): Promise<MarketServerFull> {
    return tryCatch(async () => {
      return this.service.updateProfile(Number(id), data)
    })
  }
}
