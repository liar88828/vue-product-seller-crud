import type { Like } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const { session } = await getUserSession(event)
  const data = {
	like: await db.like.all(session.id_like as number),

	toJson(): { likes: Like[] } {
	  return { likes: this.like }
	},
  }
  return data
})
