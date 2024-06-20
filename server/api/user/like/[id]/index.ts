import type { Like } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const { session } = await getUserSession(event)
  const { id } = getRouterParams(event)

  const data = {
	like: await control.user.like.id(session.id_like as number, Number(id)),

	toJson(): { like: Like[] } {
	  return { like: this.like }
	},
  }
  return data
})
