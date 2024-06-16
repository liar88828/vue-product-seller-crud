import type { Role } from "@prisma/client"
import type { TRole } from "~/types/globals/Status"
import { prisma } from "../../config/prisma"
export class RoleDB {
  test(text: string) {
    return text
  }
  async initRole() {
    return prisma.role.createMany({
      data: [
        {
          id: "ADMIN",
        },
        {
          id: "USER",
        },
        {
          id: "MARKET",
        },
      ],
    })
  }
  async createOne(id: TRole) {
    return prisma.role.upsert({
      where: { id },
      create: { id },
      update: { id },
    })
  }
  async checkRole(): Promise<Role[]> {
    return prisma.role.findMany()
  }
}
