import type { User } from "@prisma/client"

class UserSanitize {
  sanitize(data: UserCreate): UserCreate {
    return {
      email: data.email,
      name: data.name,
      address: data.address,
      phone: data.phone,
      id_role: data.id_role,
      password: data.password,
      id_market: randomNumber(),
      id_trolly: randomNumber(),
      id_like: randomNumber(),
      id_follow: randomNumber(),
    }
  }
}

export class UserServices extends UserSanitize {
  async id(id: string): Promise<User> {
    id = zods.id.string.parse(id)
    const data = await db.user.findId(id)
    if (!data) {
      throw createError({ statusCode: 404, statusMessage: "User not found" })
    }
    data.password = ""
    return data
  }

  async create(data: UserCreate): Promise<User> {
    data = zods.user.create.parse(data)
    const res = await db.user.create(data)
    res.password = ""
    return res
  }

  async update(id: string, data: UserCreate): Promise<User> {
    data = zods.user.create.parse(data)
    id = zods.id.string.parse(id)
    const res = await db.user.update(id, data)
    res.password = ""
    return res
  }

  async delete(id: string): Promise<User> {
    id = zods.id.string.parse(id)
    const res = await db.user.delete(id)
    res.password = ""
    return res
  }
}
