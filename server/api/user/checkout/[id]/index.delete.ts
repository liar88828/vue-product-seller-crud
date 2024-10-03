import type { Product } from "@prisma/client"
import { checkoutDB } from "~/server/db/transaction/order/CheckOutDB"

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const { session } = await getUserSession(event)
  const data = {
    product: await checkoutDB.delete(session.id, Number(id)), //detail(Number(id)),

    toJSON(): { product: Product } {
      return {
        product: this.product[0],
      }
    },
  }
  return data
})
