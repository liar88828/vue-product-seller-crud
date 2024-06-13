import type { User } from "@prisma/client"
import { prisma } from "~/server/config/prisma"
import type { SignUpProps } from "~/types/auth/user"
import type { ControlCreateUser } from "~/types/user/ControlCreateUser"

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

  async create(data: ControlCreateUser) {
    return prisma.user.create({
      data,
    })
  }

  async delete(id: string) {
    return prisma.user.delete({
      where: {
        id,
      },
    })
  }

  async update(id: string, data: ControlCreateUser) {
    return prisma.user.update({
      where: { id },
      data,
    })
  }
}

export class UserDB extends UserMutation {
  async findAll() {
    return prisma.user.findMany()
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
