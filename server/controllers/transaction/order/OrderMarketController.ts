import type { H3Event } from "h3"
import type { TStatus } from "~/types/globals/Status"
import { MarketConfirmService } from "~/server/services/market/MarketConfirmService"

export class OrderMarketController {
  constructor(protected event: H3Event) {}
  protected service = new MarketConfirmService()

  async all(): Promise<DataMarket[]> {
    return tryCatch(async () => {
      const { session } = await getUserSession(this.event)
      return this.service.all(Number(session.id_market))
    })
  }

  async apply(status: TStatus) {
    const { id } = getRouterParams(this.event)
    const { session } = await getUserSession(this.event)

    await db.trans.market.confirm.add(
      {
        id: Number(id),
        id_market: session.id_market,
      },
      status
    )
  }
}
