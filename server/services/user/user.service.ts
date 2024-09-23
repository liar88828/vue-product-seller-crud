import type { User } from "@prisma/client"

export class UserService extends UserSanitize {
  constructor(public serviceProduct: IProductService) {
    super()
  }

  async first(id: string): Promise<User> {
    id = zods.id.string.parse(id)
    const data = await db.user.first()
    if (!data) {
      throw createError({ statusCode: 404, statusMessage: "User not found" })
    }
    data.password = ""
    return data
  }

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
    // const res = await db.user.create(data)

    const res = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        password: data.password,
        // id_market: data.id_market,
      },
    })

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

export const userService = new UserService(productService)
export type IUserServices = UserService
