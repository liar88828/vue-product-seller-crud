import type { User } from "@prisma/client"
import type { EventHandlerRequest, H3Event } from "h3"

export class UserController {
  constructor(private readonly serviceUser: IUserService) {}

  detail(event: H3Event<EventHandlerRequest>): Promise<any> {
    throw new Error("Method not implemented.")
  }

  test(text: string): string {
    return text
  }

  async all(): Promise<UserAll[]> {
    return db.user.all()
  }

  async id(event: H3Event): Promise<User> {
    const { id } = getRouterParams(event)
    return this.serviceUser.id(id)
  }

  async create(event: H3Event): Promise<SessionUser> {
    let data = await readBody(event)
    return this.serviceUser.signUp(data)
  }

  async update(event: H3Event): Promise<UserPublic> {
    const { session } = await getUserSession(event)
    let data = await readBody(event)
    return this.serviceUser.update(session, data)
  }

  async delete(event: H3Event): Promise<User> {
    const { session } = await getUserSession(event)
    // if (session. !== "USER") {
    //   throw createError({
    //     statusCode: 401,
    //     statusMessage: "Role is not allowed",
    //   })
    // }
    return this.serviceUser.delete(session.id)
  }

  async idUserPublic(event: H3Event): Promise<UserPublic> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      return this.serviceUser.idUserPublic(session.id)
    })
  }
}

export const userController = new UserController(userService)
export type IUserController = UserController
