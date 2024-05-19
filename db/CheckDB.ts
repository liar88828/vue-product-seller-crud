import { prisma } from "~/config/prisma"

export class CheckDB {
  async Status() {
    return prisma.status.createMany({
      data: [{ id: "SAVE" }, { id: "PROCESS" }, { id: "SUCCESS" }],
    })
  }

  async Role() {
    return prisma.role.createMany({
      data: [{ id: "USER" }, { id: "SUPPLIER" }, { id: "ADMIN" }],
    })
  }

  async transaction(id_user: string) {
    const found = await prisma.transaction.findMany({
      where: { userId: id_user },
      select: { id: true },
    })
    if (!found) {
      const create = await prisma.transaction.create({
        data: {
          userId: id_user,
        },
      })
    }
  }

  async trolly(id_user: string) {
    const found = await prisma.trolly.findMany({
      select: {
        id: true,
      },
      where: {
        User: { id: id_user },
      },
    })
    if (!found) {
      const create = await prisma.trolly.create({
        data: {
          User: {
            connect: {
              id: id_user,
            },
          },
        },
      })
    }
  }
}
