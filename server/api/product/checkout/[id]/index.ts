import type { Product } from "@prisma/client"
// import { dataProducts } from "~/assets/example/product/dataProduct"

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const session = await db.user.first()
  const data = {
    // Number(id)
    product: await control.product.user.checkOut.detail(session.id, Number(id)),

    toJSON(): { product: Product } {
      return {
        product: this.product[0],
      }
    },
  }
  return data
})
