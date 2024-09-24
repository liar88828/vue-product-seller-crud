import type { User } from "@prisma/client"
import type { EventHandlerRequest, H3Event } from "h3"
import { type IUserSanitize, userSanitize } from "../sanitize/user.sanitize"

export class UserController {
  constructor(
    private readonly serviceUser: IUserService,
    // private readonly serviceTransaction: ITransactionService,
    private readonly trolly: ITrolleyController,
    private readonly sanitizeUser: IUserSanitize
  ) {}

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

  async myProfile(event: H3Event): Promise<User> {
    const { session } = await requireUserSession(event)
    return this.serviceUser.id(session.id)
  }

  async create(event: H3Event): Promise<SessionUser> {
    const { session } = await getUserSession(event)
    let data = await readBody(event)

    data = this.sanitizeUser.sanitize(data)
    return this.serviceUser.signUp(data)
  }

  async update(event: H3Event): Promise<User> {
    const { session } = await getUserSession(event)
    let data = await readBody(event)
    data = this.sanitizeUser.sanitize(data)
    return this.serviceUser.update(session.id, data)
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

  async profileFirst(event: H3Event): Promise<User> {
    const { session } = await getUserSession(event)
    return this.serviceUser.id(session.id)
  }

  async profileId(event: H3Event): Promise<User> {
    const { session } = await getUserSession(event)
    return this.serviceUser.id(session.id)
  }
}

export const userController = new UserController(
  userService,
  // transactionService,
  trolleyController,
  userSanitize
)
