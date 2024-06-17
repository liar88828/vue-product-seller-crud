import type { User } from "@prisma/client"
import type { SignUpProps } from "~/types/auth/user"
import type { UserCreate } from "~/types/user/ControlCreateUser"
import { prisma } from "~/server/config/prisma"

class UserMutation {
  async signUp({ name, email, password }: Omit<SignUpProps, "confPass">) {
    return prisma.user.create({
      data: { name, email, password },
      select: {
        name: true,
        email: true,
      },
    })
  }

  async create(data: UserCreate): Promise<User> {
    return prisma.user.create({ data })
  }

  async delete(id: string) {
    return prisma.user.delete({
      where: {
        id,
      },
    })
  }

  async update(id: string, data: UserCreate) {
    return prisma.user.update({
      where: { id },
      data,
    })
  }
}

export class UserDB extends UserMutation {
  test(text: string) {
    return text
  }

  async findAll() {
    return prisma.user.findMany({
      select: {
        address: true,
        email: true,
        id_follow: true,
        id_role: true,
        name: true,
        id: true,
        id_trolly: true,
        phone: true,
        _count: true,
      },
    })
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
  async first() {
    const data = await prisma.user.findFirst()
    if (!data) {
      throw createError({ statusCode: 404, statusMessage: "User not found" })
    }
    return data
  }

  async findId(id: string) {
    const data = await prisma.user.findUnique({ where: { id } })

    if (!data) {
      throw createError({ statusCode: 404, statusMessage: "User not found" })
    }
    return data
  }

  async findEmail(email: string) {
    return prisma.user.findUnique({ where: { email } })
  }
}
