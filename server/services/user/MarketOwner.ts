import type { TStatus } from "~/types/globals/Status"
import type { IdMarketTrans } from "~/types/product/findId"

export class MarketOwner {
  async confirm(id: IdMarketTrans, status: TStatus) {
    return db.trans.market.confirm.add(id, status)
  }
}
