import { payController } from "~/server/controllers/pay.controller"
import { orderUserController } from "~/server/controllers/transaction/order/OrderUserController"

export default defineEventHandler(async (event) => {
  const data = {
    pay: await orderUserController.payDetail(event),
    // pay: await payController.payDetail(event),
    toJson() // : {
    //   market: MarketServerFull
    //   order: DataMarket
    // }
    {
      return {
        pay: this.pay,
        // market: this.pay.market,
        // order: this.pay.order,
      }
    },
  }
  return data
})
