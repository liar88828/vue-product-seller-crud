import type { H3Event } from "h3"

export class HistoryController {
  constructor(
    protected readonly event: H3Event,
    public user = new HistoryUserController(event),
    public market = new HistoryMarketController(event)
  ) {}
}
