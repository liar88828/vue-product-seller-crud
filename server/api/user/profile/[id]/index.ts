import { userController } from "~/server/controllers/user"

export default defineEventHandler(async (event) => {
  const data = {
    user: await userController.id(event),
    toJson() {
      return this.user
    },
  }
  return data
})
