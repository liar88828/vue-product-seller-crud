import { dataOrders } from "~/assets/example/transaction/dataOrder"
import { marketServerFull, } from "~/assets/example/user/dataCompany"
import type { PayProps } from "~/types/market/order"

export default defineEventHandler(async (event) => {
  return {
    order: dataOrders[0],
    market: marketServerFull,
  } as PayProps
})
