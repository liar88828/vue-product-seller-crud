// can see
// get by session user

import { orderUserController } from "~/server/controllers/transaction/order/OrderUserController"

//
export default defineEventHandler(async (event) => {
  const data = {
    order: await orderUserController.pay(event),
    toJson() {
      return this.order
    },
  }
  return data
})
