import type { MarketServerFull, MarketUser, } from "~/types/market/ProfileCompany"
import { tryCatch } from "../../lib/tryCatch"
import { MarketServices } from "../../services/market/market"
import { MarketUserController } from "./MarketUserController"
import { MarketOwnerController } from "./MarketOwnerController"
import type { H3Event } from "h3"

export class MarketController {
  protected service = new MarketServices()
  owner = new MarketOwnerController()
  user = new MarketUserController(this.service)

  async full(event: H3Event): Promise<MarketServerFull> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      return this.service.findFull(Number(session.id_market))
    })
  }

  async id(event: H3Event): Promise<MarketUser> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)

      return this.service.id(Number(session.id))
    })
  }

  async create(
    event: H3Event
    // id_user: string, data: MarketServer
  ) {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      let data = await readBody(event)
      data = this.service.marketCreate(data)
      return this.service.create(data)
    })
  }
}
