import type { UserCreate } from "~/types/user/ControlCreateUser"

export default defineEventHandler<{ body: UserCreate }>(async (event) => {
  const role = "ADMIN"
  const data = {
    data: await control.user.create(await readBody(event)),
    async toJson() {
      return this.data
    },
  }
  return data
})
