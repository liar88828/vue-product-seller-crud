import {
  TransactionMarketCon,
  transactionMarketController,
} from "./../transaction/TransactionMarketCon"
import {
  ProductMarketController,
  productMarketController,
} from "./../product/ProductMarketController"
import {
  marketService,
  MarketServices,
} from "../../services/market/MarketService"
import type { H3Event } from "h3"
import type { MarketServerFull } from "~/types/market/ProfileCompany"

export class MarketOwnerController {
  constructor(
    private serviceMarket: MarketServices,
    private product: ProductMarketController,
    private trans: TransactionMarketCon
  ) {}

  // confirm = new MarketConfirmController(this.service.owner.)

  async full(event: H3Event): Promise<MarketServerFull> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      // console.log(session, "test")
      return this.serviceMarket.findFull(Number(session.id_market))
    })
  }

  async id(event: H3Event) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)
    await db.trans.market.confirm.id({
      id: Number(id),
      id_market: session.id_market,
    })
  }

  async _id(event: H3Event, param: string = "id") {
    const id = getRouterParam(event, param)
    const { session } = await getUserSession(event)
    await db.trans.market.confirm.id({
      id: Number(id),
      id_market: session.id_market,
    })
  }
}

export const marketOwnerController = new MarketOwnerController(
  marketService,
  productMarketController,
  transactionMarketController
)
