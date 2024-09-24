import type { H3Event } from "h3"
import { idMarketFind } from "../services/market.service"

export class OrderController {
  constructor(
    private serviceOrder: IOrderService,
    private serviceHistory: IHistoryService,
    private serviceMarket: IMarketService
  ) {}

  async userPay(event: H3Event) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)
    return db.trans.user.pay({ id_buyer: session.id, id: Number(id) })
  }
  async userFindMarket(event: H3Event): Promise<MarketServerFull> {
    const { session } = await getUserSession(event)
    const { id } = await this.serviceMarket.idMarketFind(session)
    return MarketService.findFullStatic(id)
  }

  // async marketAll(event: H3Event): Promise<DataMarket[]> {
  //   return tryCatch(async () => {
  //     const { session } = await getUserSession(event)
  //     return this.serviceOrder.confirmMarketAll(session)
  //   })
  // }

  async marketApply(event: H3Event, status: TStatus) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)
    const { id: id_market } = await idMarketFind(session)
    await this.serviceOrder.add(
      {
        id: Number(id),
        id_market: id_market,
      },
      status
    )
  }

  async marketFindAll(event: H3Event): Promise<HistoryServer[]> {
    const { session } = await getUserSession(event)
    return this.serviceHistory.marketAll(session)
  }

  async detail(event: H3Event) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)
    return this.serviceOrder.id({ id_buyer: session.id, id: Number(id) })
  }

  async allProduct(id_user: string) {
    return this.serviceHistory.userFindAll(id_user)
  }

  async userOrderDetail(event: H3Event) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)
    return db.trans.user.id({ id_buyer: session.id, id: Number(id) })
  }

  async idDetail(event: H3Event): Promise<HistoryServer> {
    const { session } = await getUserSession(event)
    const { id } = getRouterParams(event)
    return this.serviceHistory.userDetailId({
      id: Number(id),
      id_buyer: session.id,
    })
  }
  async userPayDetail(event: H3Event): Promise<PayProps> {
    const { session } = await getUserSession(event)
    const { id } = getRouterParams(event)
    const { id: id_market } = await idMarketFind(session)

    return {
      market: await MarketService.findFullStatic(id_market),
      order: await this.idDetail(event),
    }
  }
}

export const orderController = new OrderController(
  orderService,
  historyService,
  marketService
)
