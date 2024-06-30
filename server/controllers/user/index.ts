import type { User } from "@prisma/client"
import type { UserAll } from "~/types/user/ControlCreateUser"
import { UserServices } from "../../services/user"
import type { EventHandlerRequest, H3Event } from "h3"
import { UserProfileController } from "./UserProfileController"
import { TransactionServices } from "../../services/transaction/index"

export class UserController {
  constructor(
    protected readonly event: H3Event,
    protected readonly service: UserServices,
    protected readonly serviceTrans: TransactionServices,
    public product = new ProductController(event, service.product).user,
    public trolly = new TrollyController(event),
    public like = new UserLikeController(event),
    public profile = new UserProfileController(event, service),
    public trans = new TransactionController(event, serviceTrans).user
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

  async id(): Promise<User> {
    const { id } = getRouterParams(this.event)
    return this.service.id(id)
  }

  async myProfile(): Promise<User> {
    const { session } = await requireUserSession(this.event)
    return this.service.id(session.id)
  }

  async create(): Promise<User> {
    const { session } = await getUserSession(this.event)
    let data = await readBody(this.event)

    data = this.service.sanitize(data)
    return this.service.create(data)
  }

  async update(): Promise<User> {
    const { session } = await getUserSession(this.event)
    let data = await readBody(this.event)
    data = this.service.sanitize(data)
    return this.service.update(session.id, data)
  }

  async delete(): Promise<User> {
    const { session } = await getUserSession(this.event)
    if (session.id_role !== "USER") {
      throw createError({
        statusCode: 401,
        statusMessage: "Role is not allowed",
      })
    }
    return this.service.delete(session.id)
  }
}
