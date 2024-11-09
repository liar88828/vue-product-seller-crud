import type { UserCreate } from "~/types/user/ControlCreateUser"

export default defineEventHandler<{ body: UserCreate }>(async (event) => {
  const data = {
    data: await userController.create(event),
    async toJson() {
      return this.data
    },
  }
  return data
})
