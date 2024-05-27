import { prisma } from "~/config/prisma"
import type { ControlCreateUser } from "~/types/user/ControlCreateUser"

class UserMutation {
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

  async findId(id: string) {
    return prisma.user.findUnique({
      where: {
        id,
      },
    })
  }
}
