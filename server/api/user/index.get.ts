import type { User } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const { session } = await requireUserSession(event)
  const data = {
	user: await control.user.id(session.id),
	toJson(): { user: User } {
	  return { user: this.user }
	},
  }
  return data
})
