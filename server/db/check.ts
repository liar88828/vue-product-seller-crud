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
}
