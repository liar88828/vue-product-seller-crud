import type { User } from "@prisma/client"
import type { UserCreate } from "~/types/user/ControlCreateUser"

class UserSanitize {
  sanitize(data: UserCreate): UserCreate {
    return {
      email: data.email,
      name: data.name,
      address: data.address,
      phone: data.phone,
      id_follow: data.id_follow,
      id_role: data.id_role,
      id_trolly: data.id_trolly,
      password: data.password,
    }
  }
}

export class UserServices extends UserSanitize {
  async id(id: string): Promise<User> {
    id = zods.idString.parse(id)
    const data = await db.user.findId(id)
    data.password = ""
    return data
  }
  async create(data: UserCreate): Promise<User> {
    data = zods.user.parse(data)
    const res = await db.user.create(data)
    res.password = ""
    return res
  }
  async update(id: string, data: UserCreate): Promise<User> {
    data = zods.user.parse(data)
    id = zods.idString.parse(id)
    const res = await db.user.update(id, data)
    res.password = ""
    return res
  }
  async delete(id: string): Promise<User> {
    id = zods.idString.parse(id)
    const res = await db.user.delete(id)
    res.password = ""
    return res
  }
}
