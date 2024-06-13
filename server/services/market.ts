import type { Company } from "@prisma/client"
import type { Status } from "~/types/market/confirm"
import type { MarketStatic } from "~/types/profile/profile"

export class MarketServices {
  async confirm(id: string, status: Status) {
    return db.order.confirm(id, status)
  }
  async statics(id_product: number, market: Company): Promise<MarketStatic> {
    const productCount = await db.product.counts(id_product)
    // const market = await db.product.findCompany(id_product)
    const follow = await db.follow.findMarket(market.id_follow as number)

    return {
      product: productCount,
      follow: follow,
      since: market?.since || new Date(),
      response: "100%",
    }
  }
}
