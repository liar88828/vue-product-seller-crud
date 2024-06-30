import type { UserCreate } from "~/types/user/ControlCreateUser"

export default defineEventHandler<{ body: UserCreate }>(async (event) => {
  const data = {
    data: await control.user(event).create(),
    async toJson() {
      return this.data
    },
  }
  return data
})
