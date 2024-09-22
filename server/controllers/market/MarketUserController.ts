import {
  TransactionUserCon,
  transactionUserController,
} from "./../transaction/TransactionUserCon"
import type { H3Event } from "h3"
import type { MarketServerFull } from "~/types/market/ProfileCompany"
import type { Market, Product } from "@prisma/client"
import { TransactionController } from "~/server/controllers/transaction"
import {
  marketService,
  MarketServices,
} from "../../services/market/MarketService"
export class MarketUserController {
  constructor(
    private serviceMarket: MarketServices,
    private serviceTransaction: TransactionUserCon
  ) {}
  async full(event: H3Event): Promise<MarketServerFull> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      return this.serviceMarket.findFull(Number(session.id_market))
    })
  }
  async id(event: H3Event): Promise<MarketServerFull> {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)
      return this.serviceMarket.findFull(Number(id))
    })
  }
  async idLess(event: H3Event): Promise<Market> {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)
      return this.serviceMarket.id(Number(id))
    })
  }

  async all(event: H3Event): Promise<Product[]> {
    const { id } = getRouterParams(event)
    return this.serviceMarket.all(Number(id))
  }
}

export const marketUserController = new MarketUserController(
  marketService,
  transactionUserController
)
