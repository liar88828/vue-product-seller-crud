import type { H3Event } from "h3"
import type { IConfirmService } from "../services/confirm.service"
import { getIdMarket } from "~/server/services/market.service"
export class ConfirmController {
  constructor(private serviceConfirm: IConfirmService) {}

  async id(event: H3Event) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)
    const { id: id_market } = await getIdMarket(session)
    await this.serviceConfirm.id({
      id: Number(id),
      id_market,
    })
  }

  async apply(event: H3Event, status: TStatus) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)
    const { id: id_market } = await getIdMarket(session)

    await this.serviceConfirm.add(
      {
        id: Number(id),
        id_market,
      },
      status
    )
  }

  async all(event: H3Event): Promise<DataMarket[]> {
    const { session } = await getUserSession(event)
    const { id } = await getIdMarket(session)
    return this.serviceConfirm.marketAllConfirm(
      id
      // session
    )
  }
}

export const confirmController = new ConfirmController(confirmService)
