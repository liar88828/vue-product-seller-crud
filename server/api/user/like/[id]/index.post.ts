import type { Like, Product } from "@prisma/client"

export default defineEventHandler<{ body: Product }>(async (event) => {
  const data = {
    like: await control.user(event).product.like.add(),
    toJson(): { like: Like } {
      return { like: this.like }
    },
  }
  return data
})
