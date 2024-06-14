import type { User } from "@prisma/client"
import type { UserCreate } from "~/types/user/ControlCreateUser"

export class UserController {
  all() {
    db.user.findAll()
  }
  async id(id: string) {
    return service.user.id(id)
  }

  async create(data: UserCreate): Promise<User> {
    data = service.sanitize.user(data)
    return service.user.create(data)
  }
  async update(id: string, data: UserCreate): Promise<User> {
    data = service.sanitize.user(data)
    return service.user.update(id, data)
  }
  async delete(id: string): Promise<User> {
    return service.user.delete(id)
  }
}
