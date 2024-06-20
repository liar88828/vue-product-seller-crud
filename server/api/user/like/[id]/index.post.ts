import type { Like, Product } from "@prisma/client"

export default defineEventHandler<{ body: Product }>(async (event) => {
  const { session } = await getUserSession(event)
  const body = await readBody(event)

  const data = {
	like: await control.user.like.add({
	  id_user: session.id,
	  id_product: body.id,
	}),
	toJson(): { like: Like } {
	  return { like: this.like }
	},
  }
  return data
})
