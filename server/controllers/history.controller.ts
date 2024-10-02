import type { Transaction } from "@prisma/client"
import type { H3Event } from "h3"

export class HistoryController {
  constructor(private serviceHistory: IHistoryService) {}

  async detail(event: H3Event): Promise<HistoryServer> {
    const { id_market, id_transaction } = getRouterParams(event)
    const { session } = await getUserSession(event)
    return this.serviceHistory.detailId({
      id_market: Number(id_market),
      id: Number(id_transaction),
    })
  }

  async allHistory(event: H3Event): Promise<HistoryServer[]> {
    const { session } = await getUserSession(event)
    const { id_market, id_transaction } = getRouterParams(event)
    return this.serviceHistory.allHistory(session) // maybe change
  }
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
    return this.serviceHistory.marketAll(session)
  }
}

export const historyController = new HistoryController(historyService)
