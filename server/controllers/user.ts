import type { User } from "@prisma/client"
import type { UserCreate } from "~/types/user/ControlCreateUser"
import { UserServices } from "../services/user"

export class UserController {
  constructor(private service: UserServices) {}
  all() {
    db.user.findAll()
  }
  async id(id: string) {
    return this.service.id(id)
  }

  async create(data: UserCreate): Promise<User> {
    data = this.service.sanitize(data)
    return this.service.create(data)
  }
  async update(id: string, data: UserCreate): Promise<User> {
    data = this.service.sanitize(data)
    return this.service.update(id, data)
  }
  async delete(id: string): Promise<User> {
    return this.service.delete(id)
  }
}
