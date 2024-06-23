import { MarketServices } from "../../services/user/market"
import type { H3Event } from "h3"
import type { Market } from "@prisma/client"
import type { idMarketFind, MarketServerFull, MarketServiceSingle } from "~/types/market/ProfileCompany";
import type { TStatus } from "~/types/globals/Status";

export class MarketOwnerController {
  constructor(protected service: MarketServices) {}

  async create(event: H3Event): Promise<Market> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      let body = await readBody(event)

      body = this.service.marketCreate(body)
      body = zods.market.create.parse(body)
      return this.service.owner.create(body, session)
    })
  }

  async full(event: H3Event): Promise<MarketServerFull> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      console.log(session, "test")
      return this.service.findFull(Number(session.id_market))
    })
  }
  async fullSingle(event: H3Event): Promise<MarketServiceSingle> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      console.log(session, "test")
      return this.service.owner.findSingle(session.id_market)
    })
  }

  async update(event: H3Event): Promise<MarketServerFull> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      const body = await readBody(event)
      // const role: TRole = "MARKET"
      return this.service.owner.updateProfile(session.id_market, body)
    })
  }

  async confirm(event: H3Event, status: TStatus) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)

    await db.trans.market.confirm.add(
      {
        id: Number(id),
        id_market: session.id_market,
      },
      status
    )
  }
  async id(event: H3Event) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)
    await db.trans.market.confirm.id({
      id: Number(id),
      id_market: session.id_market,
    })
  }
  async idMarketFind(event: H3Event): Promise<idMarketFind> {
    const { session } = await getUserSession(event)
    return db.trans.market.confirm.idMarketFind(session.id_market)
  }
}
