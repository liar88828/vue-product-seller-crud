import type { DataMarket } from "~/types/market/order"
import { TransactionServices } from "../../services/transaction"
import type { H3Event } from "h3"
import { MarketConfirmController } from "./confirm/MarketConfirmController"

export class TransactionMarketCon {
  protected service = new TransactionServices()

  history = new HistoryController().market
  order = new MarketConfirmController(this.service.market.confirm)

  async allProduct(event: H3Event) {
	return tryCatch(async () => {
	  const { session } = await getUserSession(event)
	  return this.service.allProduct(session.id_market, session.id)
	})
  }

  async all(event: H3Event): Promise<DataMarket[]> {
	const { session } = await getUserSession(event)
	return db.trans.market.allDetail(session.id_market)
  }

  async detail(event: H3Event): Promise<DataMarket> {
	const { id } = getRouterParams(event)
	const { session } = await getUserSession(event)
	return db.trans.market.idDetail({
	  id_market: session.id_market,
	  id: Number(id),
	})
  }
}
