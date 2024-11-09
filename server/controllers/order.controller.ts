import type { H3Event } from "h3"
import { getIdMarket } from "../services/market.service"

class UserController {
  constructor(
    protected serviceOrder: IOrderService,
    protected serviceHistory: IHistoryService,
    protected serviceMarket: IMarketService
  ) {}

  async userOrderId(event: H3Event): Promise<TransactionConfirmServer> {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)
      const { session } = await getUserSession(event)
      return prisma.transaction
        .findUnique({
          include: {
            Market: true,
            Trolley: {
              include: {
                Product: true,
              },
            },
          },
          where: {
            id: Number(id),
            id_buyer: session.id,
          },
        })
        .then((data) => {
          if (!data) {
            throw createError({
              statusCode: 404,
              statusMessage: "Confirm Transaction id not found",
            })
          }
          return data
        })
    })
  }

  async userOrderAll(event: H3Event): Promise<HistoryServer[]> {
    const { session } = await getUserSession(event)
    return this.serviceOrder.userFindAll(session)
  }

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
    const { id: id_market } = await getIdMarket(session)

    return {
      market: await MarketService.findFullStatic(id_market),
      order: await this.idDetail(event),
    }
  }

  async userOrderDetail(event: H3Event) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)
    return db.trans.user.id({ id_buyer: session.id, id: Number(id) })
  }
}

export class OrderController extends UserController {
  constructor(
    protected serviceOrder: IOrderService,
    protected serviceHistory: IHistoryService,
    protected serviceMarket: IMarketService
  ) {
    super(serviceOrder, serviceHistory, serviceMarket)
  }

  // market
  async marketOrderAll(event: H3Event): Promise<TransServer[]> {
    const { session } = await getUserSession(event)
    const { id } = await getIdMarket(session)
    return this.serviceOrder.orderConfirmAll(id)
  }
  async marketOrderId(event: H3Event): Promise<TransactionConfirmServer> {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)
      const { session } = await getUserSession(event)
      return prisma.transaction
        .findUnique({
          include: {
            Market: true,
            Trolley: {
              include: {
                Product: true,
              },
            },
          },
          where: {
            id: Number(id),
          },
        })
        .then((data) => {
          if (!data) {
            throw createError({
              statusCode: 404,
              statusMessage: "Confirm Transaction id not found",
            })
          }
          return data
        })
    })
  }

  async marketApplyOrder(event: H3Event, status: TStatus) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)
    const { id: id_market } = await getIdMarket(session)

    await this.serviceOrder.orderConfirmUpdate(
      {
        id: Number(id),
        id_market,
      },
      status
    )
  }

  //

  // async marketAll(event: H3Event): Promise<DataMarket[]> {
  //   return tryCatch(async () => {
  //     const { session } = await getUserSession(event)
  //     return this.serviceOrder.confirmMarketAll(session)
  //   })
  // }

  async marketOrderApply(event: H3Event, status: TStatus) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)
    const { id: id_market } = await getIdMarket(session)
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
}

export const orderController = new OrderController(
  orderService,
  historyService,
  marketService
)
