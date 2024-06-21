import type { User } from "@prisma/client"
import type { UserAll } from "~/types/user/ControlCreateUser"
import { UserServices } from "../../services/user"
import { UserLikeController } from "./like"
import type { EventHandlerRequest, H3Event } from "h3"
import type { ClassBase } from "~/types/globals/controller"
import { UserProfileController } from "./UserProfileController"

export class UserController implements ClassBase {
  private service = new UserServices()
  like = new UserLikeController()
  profile = new UserProfileController(this.service)
  detail(event: H3Event<EventHandlerRequest>): Promise<any> {
    throw new Error("Method not implemented.")
  }

  test(text: string): string {
    return text
  }

  async all(event: H3Event): Promise<UserAll[]> {
    return db.user.all()
  }

  async id(event: H3Event): Promise<User> {
    const { id } = getRouterParams(event)
    return this.service.id(id)
  }

  async myProfile(event: H3Event): Promise<User> {
    const { session } = await requireUserSession(event)
    return this.service.id(session.id)
  }

  async create(event: H3Event): Promise<User> {
    const { session } = await getUserSession(event)
    let data = await readBody(event)

    data = this.service.sanitize(data)
    return this.service.create(data)
  }

  async update(event: H3Event): Promise<User> {
    const { session } = await getUserSession(event)
    let data = await readBody(event)
    data = this.service.sanitize(data)
    return this.service.update(session.id, data)
  }

  async delete(event: H3Event): Promise<User> {
    const { session } = await getUserSession(event)
    if (session.id_role !== "USER") {
      throw createError({
        statusCode: 401,
        statusMessage: "Role is not allowed",
      })
    }
    return this.service.delete(session.id)
  }
}
