import { MarketServices } from "../../services/market/market"
import type { H3Event } from "h3"
import type { Market } from "@prisma/client"
import type { idMarketFind, MarketServerFull, MarketServiceSingle, } from "~/types/market/ProfileCompany"

export class MarketOwnerController {
  protected service = new MarketServices()

  // confirm = new MarketConfirmController(this.service.owner.)
  // product = new ProductUserController(this.service.owner.product)
  trans = new TransactionController().market
  async create(event: H3Event): Promise<Market> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      let body = await readBody(event)

      body = this.service.marketCreate(body)
      body = zods.market.create.parse(body)
      const data = await this.service.owner.create(body, session)
      await replaceUserSession(event, {
        loggedInAt: new Date(),
        session: data.user,
        user: data.user,
      })
      return data.market
    })
  }

  async full(event: H3Event): Promise<MarketServerFull> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      // console.log(session, "test")
      return this.service.findFull(Number(session.id_market))
    })
  }
  async fullSingle(event: H3Event): Promise<MarketServiceSingle> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      // console.log(session, "test")
      return this.service.owner.findSingle(session.id_market)
    })
  }

  // const role: TRole = "MARKET"
  async update(event: H3Event): Promise<MarketServiceSingle> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      const body: MarketServiceSingle = await readBody(event)
      return this.service.owner.updateProfile(session.id_market, body)
    })
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
