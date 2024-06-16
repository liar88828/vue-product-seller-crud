import type { Product } from "@prisma/client"
export default defineEventHandler<{ body: Product }>(async (event) => {
  const session = await db.user.first()
  const body = await readBody(event)

  const data = {
    like: await control.user.add({
      id_user: session.id,
      id_product: body.id,
    }),
    toJson() {
      return this.like
    },
  }
  return data
})
