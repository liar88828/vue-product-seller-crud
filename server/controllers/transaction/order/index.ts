import { orderUserController } from "./OrderUserController"
import { orderMarketController } from "./OrderMarketController"

class OrderController {
  constructor(
    public market = orderMarketController,
    public user = orderUserController
  ) {}
}

const orderControllerXX = new OrderController()
