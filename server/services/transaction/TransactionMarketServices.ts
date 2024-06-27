import type { DataMarket } from "~/types/market/order"
import type { IdMarketTrans } from "~/types/product/findId"
import { MarketConfirmService } from "../market/MarketConfirmService"

export class TransactionMarketServices {
  confirm = new MarketConfirmService()

  async all(id_market: number): Promise<DataMarket[]> {
    return db.trans.market.allDetail(id_market)
  }
  async detail(id: IdMarketTrans): Promise<DataMarket> {
    return db.trans.market.idDetail(id)
  }
}
