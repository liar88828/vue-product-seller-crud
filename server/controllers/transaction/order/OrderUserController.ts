import { MarketServices } from "~/server/services/market/MarketService"
import type { H3Event } from "h3"
import type { PayProps } from "~/types/market/order"
import { PayService } from "../../pay.controller"

export class OrderUserController extends PayService {
  constructor(private serviceMarket: MarketServices) {
    super()
  }

  async detail(event: H3Event) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)
    return db.trans.user.id({ id_buyer: session.id, id: Number(id) })
  }

  async payDetail(event: H3Event): Promise<PayProps> {
    const { session } = await getUserSession(event)
    const { id } = getRouterParams(event)

    return {
      market: await MarketServices.findFullStatic(Number(session.id_market)),

      order: await this.idDetail({
        id: Number(id),
        id_buyer: session.id,
      }),
    }
  }

  async findMarket(event: H3Event): Promise<MarketServerFull> {
    const { session } = await getUserSession(event)
    return MarketServices.findFullStatic(Number(session.id_market))
  }

  async pay(event: H3Event) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)
    return db.trans.user.pay({ id_buyer: session.id, id: Number(id) })
  }
}

export const orderUserController = new OrderUserController(marketService)
