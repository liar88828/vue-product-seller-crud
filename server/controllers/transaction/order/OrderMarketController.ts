import type { H3Event } from "h3"
import type { TStatus } from "~/types/globals/Status"
import {
  marketConfirmService,
  MarketConfirmService,
} from "~/server/services/market/MarketConfirmService"

export class OrderMarketController {
  constructor(private serviceMarketConfirm: MarketConfirmService) {}

  async all(event: H3Event): Promise<DataMarket[]> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      return this.serviceMarketConfirm.all(Number(session.id_market))
    })
  }

  async apply(event: H3Event, status: TStatus) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)

    await db.trans.market.confirm.add(
      {
        id: Number(id),
        id_market: session.id_market,
      },
      status
    )
  }
}

export const orderMarketController = new OrderMarketController(
  marketConfirmService
)
