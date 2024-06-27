import { HistoryMarketController } from "./HistoryMarketController"
import { HistoryUserController } from "./HistoryUserController"

export class HistoryController {
  user = new HistoryUserController()
  market = new HistoryMarketController()
}
