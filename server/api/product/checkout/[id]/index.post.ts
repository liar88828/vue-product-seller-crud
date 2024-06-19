import type { Product } from "@prisma/client"
import { dataProducts } from "~/assets/example/product/dataProduct"

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const session = await db.user.first()
  const data = {
    // is must checkout not detail product
    product: await control.product.user.checkOut.create(session.id), //detail(Number(id)),

    toJSON(): { product: Product } {
      return {
        product: this.product[0],
      }
    },
  }
  return data
})
