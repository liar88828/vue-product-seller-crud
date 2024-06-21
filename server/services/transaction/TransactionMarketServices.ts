import type { DataMarket } from "~/types/market/order"
import type { IdMarketTrans } from "~/types/product/findId"

export class TransactionMarketServices {
  async all(id_market: number): Promise<DataMarket[]> {
    return db.trans.market.allDetail(id_market)
  }
  async detail(id: IdMarketTrans): Promise<DataMarket> {
    return db.trans.market.idDetail(id)
  }
}
