import type { H3Event } from "h3"
import type { TStatus } from "~/types/globals/Status"
import { MarketConfirmService } from "~/server/services/market/MarketConfirmService"

export class MarketConfirmController {
  constructor(protected service: MarketConfirmService) {}

  async all(event: H3Event): Promise<DataMarket[]> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      return this.service.all(Number(session.id_market))
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
