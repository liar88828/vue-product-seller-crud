import type {
  MarketServerFull,
  MarketServerFullNull,
} from "~/types/market/ProfileCompany"
import { tryCatch } from "../../lib/tryCatch"
import { MarketServices } from "../../services/user/market"
import type { TRole, TStatus } from "~/types/globals/Status"
import type { H3Event } from "h3"

export class MarketOwnerController {
  constructor(protected service: MarketServices) {}

  async full(event: H3Event): Promise<MarketServerFull> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      return this.service.findFull(Number(session.id_market))
    })
  }

  async update(event: H3Event): Promise<MarketServerFullNull> {
    const role: TRole = "ADMIN"
    const id = getRouterParams(event).id
    const body = await readBody(event)
    return tryCatch(async () => {
      return this.service.updateProfile(Number(id), body)
    })
  }

  async confirm(event: H3Event, status: TStatus) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)
    await db.trans.market.confirm.add(
      {
        id: Number(id),
        id_market: session.id_market as number,
      },
      status
    )
  }
  async id(event: H3Event) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)
    await db.trans.market.confirm.id({
      id: Number(id),
      id_market: session.id_market as number,
    })
  }
}
