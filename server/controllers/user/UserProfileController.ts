import { User } from "@prisma/client"
import type { EventHandlerRequest, H3Event } from "h3"
import { UserServices } from "~/server/services/user"

export class UserProfileController {
  constructor(private service: UserServices) {}
  async id(event: H3Event): Promise<User> {
    const { session } = await getUserSession(event)
    return this.service.id(session.id)
  }
}
