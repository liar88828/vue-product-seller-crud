import { dataOrders } from "~/assets/example/transaction/dataOrder"
export default defineEventHandler(async (event) => {
  const { session } =  await getUserSession(event)
  await control.trans.market.all(session.id_market as number)
  return { history: dataOrders }
})
