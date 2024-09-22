import {
  historyMarketController,
  HistoryMarketController,
} from "./history/HistoryMarketController"
import {
  OrderMarketController,
  orderMarketController,
} from "./order/OrderMarketController"
import type { DataMarket } from "~/types/market/order"
import type { H3Event } from "h3"
import {
  transactionService,
  TransactionService,
} from "../../services/transaction/index"

export class TransactionMarketCon {
  constructor(
    private serviceTransaction: TransactionService,
    private orderController: OrderMarketController,
    private historyController: HistoryMarketController
  ) {}

  async allProduct(event: H3Event) {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      return this.serviceTransaction.allProduct(session.id_market, session.id)
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

export const transactionMarketController = new TransactionMarketCon(
  transactionService,
  orderMarketController,
  historyMarketController
)
