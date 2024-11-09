import type { Product } from "@prisma/client"
import { checkoutDB } from "~/server/db/transaction/order/CheckOutDB"
// import { dataProducts } from "~/assets/example/product/dataProduct"

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const { session } = await getUserSession(event)
  const data = {
    // Number(id)
    product: await checkoutDB.detail(session.id, Number(id)),

    toJSON(): { product: Product } {
      return {
        product: this.product[0],
      }
    },
  }
  return data
})
