import type { User } from "@prisma/client"
import type { H3Event } from "h3"
import { UserServices } from "~/server/services/user"

export class UserProfileController {
  constructor(
    protected readonly event: H3Event,
    private service: UserServices
  ) {}
  async id(): Promise<User> {
    const { session } = await getUserSession(this.event)
    return this.service.id(session.id)
  }
  async first(): Promise<User> {
    const { session } = await getUserSession(this.event)
    return this.service.id(session.id)
  }
}
