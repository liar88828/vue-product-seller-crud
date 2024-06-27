import type { H3Event } from "h3"
import type { MarketServerFull } from "~/types/market/ProfileCompany"
import { MarketServices } from "~/server/services/market/market"
import type { Market, Product } from "@prisma/client"
import { TransactionController } from "~/server/controllers/transaction";

export class MarketUserController {
  constructor(protected service: MarketServices) {}
  trans=new TransactionController().user

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
  async idLess(event: H3Event): Promise<Market> {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)
      return this.service.id(Number(id))
    })
  }

  async all(event: H3Event): Promise<Product[]> {
    const { id } = getRouterParams(event)
    return this.service.all(Number(id))
  }
}
