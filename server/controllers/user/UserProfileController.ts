import type { User } from "@prisma/client"
import type { H3Event } from "h3"
import { userService, UserServices } from "~/server/services/user"

export class UserProfileController {
  constructor(private serviceUser: UserServices) {}
  async id(event: H3Event): Promise<User> {
    const { session } = await getUserSession(event)
    return this.serviceUser.id(session.id)
  }
  async first(event: H3Event): Promise<User> {
    const { session } = await getUserSession(event)
    return this.serviceUser.id(session.id)
  }
}

export const profileController = new UserProfileController(userService)
