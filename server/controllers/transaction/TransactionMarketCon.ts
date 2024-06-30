import type { DataMarket } from "~/types/market/order"
import type { H3Event } from "h3"
import { OrderController } from "~/server/controllers/transaction/order"
import { TransactionServices } from "../../services/transaction/index"

export class TransactionMarketCon {
  constructor(
    protected event: H3Event,
    protected service: TransactionServices,
    public order = new OrderController(event).market,
    public history = new HistoryController(event).market
  ) {}

  async allProduct() {
    return tryCatch(async () => {
      const { session } = await getUserSession(this.event)
      return this.service.allProduct(session.id_market, session.id)
    })
  }

  async all(): Promise<DataMarket[]> {
    const { session } = await getUserSession(this.event)
    return db.trans.market.allDetail(session.id_market)
  }

  async detail(): Promise<DataMarket> {
    const { id } = getRouterParams(this.event)
    const { session } = await getUserSession(this.event)
    return db.trans.market.idDetail({
      id_market: session.id_market,
      id: Number(id),
    })
  }
}
