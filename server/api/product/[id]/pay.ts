import { dataOrders } from "~/assets/example/transaction/dataOrder"
import { dataCompany } from "~/assets/example/user/dataCompany"
import type { PayProps } from "~/types/transaction/page"
export default defineEventHandler(async (event) => {
  return {
    order: dataOrders[0],
    company: dataCompany,
  } as PayProps
})
