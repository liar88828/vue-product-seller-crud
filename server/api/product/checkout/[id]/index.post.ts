import type { Product } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const { session } = await getUserSession(event)
  const data = {
    // is must checkout not detail product
    product: await control.user(event).product.checkOut.create(session.id), //detail(Number(id)),

    toJSON(): { product: Product } {
      return {
        product: this.product[0],
      }
    },
  }
  return data
})
