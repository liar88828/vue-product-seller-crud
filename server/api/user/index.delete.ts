import type { UserCreate } from "~/types/user/ControlCreateUser"

export default defineEventHandler<{ body: UserCreate }>(async (event) => {
  const { session } = await getUserSession(event)
  if (session.id_role !== "USER") {
    throw createError({ statusCode: 401, statusMessage: "Invalid Password" })
  }
  const data = {
    data: await control.user.delete(session.id),
    toJson() {
      return this.data
    },
  }
  return data
})
