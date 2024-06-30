import type { H3Event } from "h3"
import { MarketServices } from "../../../services/market/_index"

export class OrderController {
  constructor(
    protected event: H3Event,
    public market = new OrderMarketController(event),
    public user = new OrderUserController(event)
  ) {}
}
