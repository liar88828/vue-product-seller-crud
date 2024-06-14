import type { UserCreate, UserUpdate } from "~/types/user/ControlCreateUser"

export default defineEventHandler(async (event) => {
  const role = "ADMIN"
  const session = await db.user.first()
  const data = {
    data: await control.user.update(session.id, await readBody(event)),
    async toJson() {
      return this.data
    },
  }
  return data
})
