import type { Status } from "~/types/market/confirm"

export class MarketServices {
  async confirm(id: string, status: Status) {
    return db.order.confirm(id, status)
  }
}
