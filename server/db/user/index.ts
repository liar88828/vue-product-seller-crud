import type { User } from "@prisma/client"
import { prisma } from "~/server/config/prisma";

class UserMutation {
  private async create(data: UserCreate): Promise<User> {
    return prisma.user.create({ data })
  }

  async update(id: string, data: UserCreate): Promise<User> {
    const res = await prisma.user.update({
      where: { id },
      data,
    })
    res.password = ""
    return res
  }
}

export class UserDB extends UserMutation {
  test(text: string) {
    return text
  }

  async all(): Promise<UserAll[]> {
    const data = await prisma.user.findMany().then((data) =>
      data.map((d) => {
        return { ...d, password: "" }
      })
    )
    return data
  }

  async findAllFull() {
    return prisma.user
      .findMany({
        include: {
          // Follow: true,
          Market: true,
          // MessageList: true,
          // Preview: true,
          // Product: true,
          // Role: true,
          Transaction: true,
          // Trolley: true,
          _count: true,
        },
      })
      .then((data) =>
        data.map((d) => {
          return {
            ...d,
            password: "",
          }
        })
      )
  }

  async first(): Promise<User> {
    const data = await prisma.user.findFirst()
    if (!data) {
      throw createError({ statusCode: 404, statusMessage: "User not found" })
    }
    data.password = ""
    return data
  }

  async findId(id: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } })
  }

  async findEmail(email: string): Promise<User> {
    const res = await prisma.user.findUnique({ where: { email } })
    if (!res) {
      throw createError({ statusCode: 404, statusMessage: "User not found" })
    }
    res.password = ""
    return res
  }
}
