import { confirmController } from "~/server/controllers/confirm.controller"
import { orderMarketController } from "~/server/controllers/transaction/order/OrderMarketController"

export default defineEventHandler(async (event) => {
  const market = await confirmController.apply(event, "CANCELED")
  return { market }
})
