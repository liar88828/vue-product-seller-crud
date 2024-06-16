import { prisma } from "~/server/config/prisma"

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
      return create
    }
  }
}
