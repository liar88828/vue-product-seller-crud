import type { User } from "@prisma/client"
import type { SignUpProps } from "~/types/auth/user"
import type { UserAll, UserCreate } from "~/types/user/ControlCreateUser"
import { prisma } from "~/server/config/prisma"

class UserMutation {
  async signUp({ name, email, password }: Omit<SignUpProps, "confPass">) {
    const trolly = await prisma.trolly.create({
      data: {},
    })

    const follow = await prisma.follow.create({
      data: {},
    })

    const like = await prisma.like.create({
      data: {},
    })

    const market = await prisma.market.create({
      data: {},
    })

    return prisma.user.create({
      data: {
        name,
        email,
        password,
        id_like: like.id,
        id_market: market.id,
        id_follow: follow.id,
        id_trolly: trolly.id,
        id_role: "USER",
      },
      select: {
        name: true,
        email: true,
      },
    })
  }

  async create(data: UserCreate): Promise<User> {
    return prisma.user.create({ data })
  }

  async delete(id: string): Promise<User> {
    const res = await prisma.user.delete({
      where: {
        id,
      },
    })
    res.password = ""
    return res
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
    const data = await prisma.user.findMany({
      select: {
        address: true,
        email: true,
        id: true,
        id_follow: true,
        id_market: true,
        id_role: true,
        id_trolly: true,
        name: true,
        phone: true,
        id_like: true,
      },
    })
    return data
  }

  async findAllFull() {
    return prisma.user.findMany({
      select: {
        address: true,
        Market: true,
        email: true,
        Follow: true,
        id_follow: true,
        id_role: true,
        name: true,
        id: true,
        _count: true,
        id_trolly: true,
        MessageList: true,
        phone: true,
        Preview: true,
        Product: true,
        Role: true,
        Transaction: true,
        Trolly: true,
      },
    })
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
