import type { IdMarketTrans } from "~/types/product/findId"

export class TransactionMarketServices {
  async all(id_market: number) {
    return db.trans.market.allDetail(id_market)
  }
  async detail(id: IdMarketTrans) {
    return db.trans.market.idDetail(id)
  }
}
