import type { H3Event } from "h3"
import type { MarketServerFull } from "~/types/market/ProfileCompany"
import type { Market, Product } from "@prisma/client"
import { TransactionController } from "~/server/controllers/transaction"
import { MarketServices } from "../../services/market/_index"
export class MarketUserController {
  constructor(
    protected readonly event: H3Event,
    protected readonly service: MarketServices,
    public trans = new TransactionController(event, service.trans).user
  ) {}
  async full(): Promise<MarketServerFull> {
    return tryCatch(async () => {
      const { session } = await getUserSession(this.event)
      return this.service.findFull(Number(session.id_market))
    })
  }
  async id(): Promise<MarketServerFull> {
    return tryCatch(async () => {
      const { id } = getRouterParams(this.event)
      return this.service.findFull(Number(id))
    })
  }
  async idLess(): Promise<Market> {
    return tryCatch(async () => {
      const { id } = getRouterParams(this.event)
      return this.service.id(Number(id))
    })
  }

  async all(): Promise<Product[]> {
    const { id } = getRouterParams(this.event)
    return this.service.all(Number(id))
  }
}
