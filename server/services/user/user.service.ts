import type { User } from "@prisma/client"
import { prisma } from "~/server/config/prisma"
import { randomOTP } from "~/server/utils/randomId"

export class UserService {
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

  async signUp(data: Omit<SignUpProps, "confPass">): Promise<SessionUser> {
    data = zods.user.signUp.parse(data)

    return prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          name: data.name,
          email: data.email,
          password: data.password,
          OTP: randomOTP,
          address: "",
          phone: "",
          createMarket: false,
        },
      })
      user.password = ""
      return user
    })
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
    const res = await prisma.user.delete({
      where: {
        id,
      },
    })
    res.password = ""
    return res
  }
}

export const userService = new UserService()
export type IUserService = UserService
