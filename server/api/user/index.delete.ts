import { UserCreate } from "~/types/user/ControlCreateUser"

export default defineEventHandler<{ body: UserCreate }>(async (event) => {
  const role = "ADMIN"
  const devPassord = "123456"
  const session = await db.user.first()
  const data = {
    data: await control.user.delete(session.id),
    async toJson() {
      return this.data
    },
  }
  return data
})
