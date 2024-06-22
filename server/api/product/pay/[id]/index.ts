import { dataOrders } from "~/assets/example/transaction/dataOrder"
import { dataCompany } from "~/assets/example/user/dataCompany"
export default defineEventHandler(async (event) => {
  return {
    order: dataOrders[0],
    market: dataCompany,
  }
})
