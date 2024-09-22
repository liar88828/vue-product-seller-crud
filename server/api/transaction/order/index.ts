// Can see all order of user want buy

import { orderController } from "~/server/controllers/order.controller"

// find by market id from session id
export default defineEventHandler(async (event) => {
  const data = {
    data: await orderController.allProduct(""),
    toJson() {
      return this.data
    },
  }
  return data
})
