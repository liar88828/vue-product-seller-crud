import type {
  MarketServerFull,
  MarketUser,
} from "~/types/market/ProfileCompany"
import { tryCatch } from "../../lib/tryCatch"
import { MarketServices } from "../../services/market/_index"
import { MarketUserController } from "./MarketUserController"
import { MarketOwnerController } from "./MarketOwnerController"
import type { H3Event } from "h3"

export class MarketController {
  constructor(
    protected readonly event: H3Event,
    protected readonly service: MarketServices,
    public owner = new MarketOwnerController(event, service),
    public user = new MarketUserController(event, service),
    public product = new ProductController(event, service.product).market
  ) {}

  async full(): Promise<MarketServerFull> {
    return tryCatch(async () => {
      const { session } = await getUserSession(this.event)
      return this.service.findFull(Number(session.id_market))
    })
  }

  async id(): Promise<MarketUser> {
    return tryCatch(async () => {
      const { session } = await getUserSession(this.event)

      return this.service.id(Number(session.id))
    })
  }

  async create(): Promise<MarketUser> {
    // id_user: string, data: MarketServer
    return tryCatch(async () => {
      let data = await readBody(this.event)
      const { session } = await getUserSession(this.event)
      data = this.service.sanitize(data)
      const marketData = await this.service.create(data, session)
      await replaceUserSession(this.event, {
        session: marketData.User,
        user: marketData.User,
        loggedInAt: new Date(),
      })
      return marketData
    })
  }
}
