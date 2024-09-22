import type { User } from "@prisma/client"
import { userController } from "~/server/controllers/user"
import { profileController } from "~/server/controllers/user/UserProfileController"

export default defineEventHandler(async (event) => {
  const data = {
    user: await profileController.id(event),
    toJson(): { user: User } {
      return { user: this.user }
    },
  }
  return data
})
