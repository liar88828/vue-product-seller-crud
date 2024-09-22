import {
  TransactionUserCon,
  transactionUserController,
} from "./../transaction/TransactionUserCon"
import { trolleyController, TrolleyController } from "./trolly"
import type { User } from "@prisma/client"
import type { UserAll } from "~/types/user/ControlCreateUser"
import { userService, UserServices } from "../../services/user"
import type { EventHandlerRequest, H3Event } from "h3"
import {
  profileController,
  UserProfileController,
} from "./UserProfileController"
import {
  transactionService,
  TransactionService,
} from "../../services/transaction/index"

export class UserController {
  constructor(
    protected readonly serviceUser: UserServices,
    protected readonly serviceTransaction: TransactionService,
    protected readonly trolly: TrolleyController,
    protected profile: UserProfileController,
    public trans: TransactionUserCon
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

  async create(event: H3Event): Promise<User> {
    const { session } = await getUserSession(event)
    let data = await readBody(event)

    data = this.serviceUser.sanitize(data)
    return this.serviceUser.create(data)
  }

  async update(event: H3Event): Promise<User> {
    const { session } = await getUserSession(event)
    let data = await readBody(event)
    data = this.serviceUser.sanitize(data)
    return this.serviceUser.update(session.id, data)
  }

  async delete(event: H3Event): Promise<User> {
    const { session } = await getUserSession(event)
    if (session.id_role !== "USER") {
      throw createError({
        statusCode: 401,
        statusMessage: "Role is not allowed",
      })
    }
    return this.serviceUser.delete(session.id)
  }
}

export const userController = new UserController(
  userService,
  transactionService,
  trolleyController,
  profileController,
  transactionUserController
)
