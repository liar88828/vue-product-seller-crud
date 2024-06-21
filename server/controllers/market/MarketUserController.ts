import type { H3Event } from "h3"
import type { MarketServerFull } from "~/types/market/ProfileCompany"
import { MarketServices } from "~/server/services/user/market"

export class MarketUserController {
  constructor(protected service: MarketServices) {}

  async full(event: H3Event): Promise<MarketServerFull> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      return this.service.findFull(Number(session.id_market))
    })
  }
  async id(event: H3Event): Promise<MarketServerFull> {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)
      return this.service.findFull(Number(id))
    })
  }
}
