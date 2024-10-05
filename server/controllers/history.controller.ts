import type { Transaction } from "@prisma/client"
import type { H3Event } from "h3"

class User {
  constructor(protected serviceHistory: IHistoryService) {}

  async userDelete(event: H3Event) {
    const { session } = await getUserSession(event)
    const { id } = getRouterParams(event)
    return db.trans.user.delete({ id_buyer: session.id, id: Number(id) })
  }

  async userAllId(event: H3Event): Promise<Transaction[]> {
    const { session } = await getUserSession(event)
    return db.trans.user.all(session.id)
  }

  async userAll(event: H3Event): Promise<HistoryServer[]> {
    const { session } = await getUserSession(event)
    return this.serviceHistory.userAll(session)
  }

  async userId(event: H3Event): Promise<HistoryServer> {
    const { id } = getQuery(event)
    const { session } = await getUserSession(event)
    return this.serviceHistory.userId(Number(id), session)
  }
}

export class HistoryController extends User {
  constructor(protected serviceHistory: IHistoryService) {
    super(serviceHistory)
  }

  async detail(event: H3Event): Promise<HistoryServer> {
    const { id_market, id_transaction } = getRouterParams(event)
    const { session } = await getUserSession(event)
    return this.serviceHistory.detailId({
      id_market: Number(id_market),
      id: Number(id_transaction),
    })
  }

  async marketId(event: H3Event): Promise<HistoryServer> {
    const { id_market, id_transaction } = getRouterParams(event)
    const { session } = await getUserSession(event)
    return this.serviceHistory.detailId({
      id_market: Number(id_market),
      id: Number(id_transaction),
    })
  }
  async marketAll(event: H3Event): Promise<HistoryServer[]> {
    const { session } = await getUserSession(event)
    const { id_market, id_transaction } = getRouterParams(event)
    return this.serviceHistory.allHistory(session) // maybe change
  }

  async allHistory(event: H3Event): Promise<HistoryServer[]> {
    const { session } = await getUserSession(event)
    const { id_market, id_transaction } = getRouterParams(event)
    return this.serviceHistory.allHistory(session) // maybe change
  }
  async marketHistoryAll(event: H3Event): Promise<HistoryServer[]> {
    const { session } = await getUserSession(event)
    const { id_market, id_transaction } = getRouterParams(event)
    return this.serviceHistory.allHistory(session) // maybe change
  }
  async marketHistoryId(event: H3Event): Promise<HistoryServer> {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)
    const market = await getIdMarket(session)
    return this.serviceHistory.detailId({
      id_market: market.id,
      id: Number(id),
    })
  }
}

export const historyController = new HistoryController(historyService)
