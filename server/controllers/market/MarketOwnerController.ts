import type { MarketServer, MarketServerFullNull, } from "~/types/market/ProfileCompany"
import { tryCatch } from "../../lib/tryCatch"
import { MarketServices } from "../../services/user/market"
import type { IdMarketTrans } from "~/types/product/findId";
import type { TStatus } from "~/types/globals/Status";

export class MarketOwnerController {
  constructor(protected service: MarketServices) {
  }

  async update(id: string, data: MarketServer): Promise<MarketServerFullNull> {
	return tryCatch(async () => {
	  return this.service.updateProfile(Number(id), data)
	})
  }

  async confirm(id: IdMarketTrans, status: TStatus) {
	await db.trans.market.confirm.add(id, status)
  }
  async id(id: IdMarketTrans,) {
	await db.trans.market.confirm.id(id)
  }
}
