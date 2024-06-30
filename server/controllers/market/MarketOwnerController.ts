import { MarketServices } from "../../services/market/_index"
import type { H3Event } from "h3"
import type { Market } from "@prisma/client"
import type {
  idMarketFind,
  MarketServerFull,
  MarketServiceSingle,
} from "~/types/market/ProfileCompany"
import { ProductController } from "../product"

export class MarketOwnerController {
  constructor(
    protected readonly event: H3Event,
    protected readonly service: MarketServices,
    public product = new ProductController(event, service.product).market,
    public trans = new TransactionController(event, service.trans).market
  ) {}

  // confirm = new MarketConfirmController(this.service.owner.)

  async create(): Promise<Market> {
    return tryCatch(async () => {
      const { session } = await getUserSession(this.event)
      let body = await readBody(this.event)

      body = this.service.sanitize(body)
      body = zods.market.create.parse(body)
      const data = await this.service.owner.create(body, session)
      await replaceUserSession(this.event, {
        loggedInAt: new Date(),
        session: data.user,
        user: data.user,
      })
      return data.market
    })
  }

  async full(): Promise<MarketServerFull> {
    return tryCatch(async () => {
      const { session } = await getUserSession(this.event)
      // console.log(session, "test")
      return this.service.findFull(Number(session.id_market))
    })
  }

  async fullSingle(): Promise<MarketServiceSingle> {
    return tryCatch(async () => {
      const { session } = await getUserSession(this.event)
      console.log(session, "test")
      return this.service.owner.findSingle(session.id_market)
    })
  }

  // const role: TRole = "MARKET"
  async update(): Promise<MarketServiceSingle> {
    return tryCatch(async () => {
      const { session } = await getUserSession(this.event)
      const body: MarketServiceSingle = await readBody(this.event)
      return this.service.owner.updateProfile(session.id_market, body)
    })
  }

  async id() {
    const { id } = getRouterParams(this.event)
    const { session } = await getUserSession(this.event)
    await db.trans.market.confirm.id({
      id: Number(id),
      id_market: session.id_market,
    })
  }

  async _id(param: string = "id") {
    const id = getRouterParam(this.event, param)
    const { session } = await getUserSession(this.event)
    await db.trans.market.confirm.id({
      id: Number(id),
      id_market: session.id_market,
    })
  }

  async idMarketFind(): Promise<idMarketFind> {
    const { session } = await getUserSession(this.event)
    return db.trans.market.confirm.idMarketFind(session.id_market)
  }
}
