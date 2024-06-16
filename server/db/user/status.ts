import type { Role } from "@prisma/client"
import type { TStatus } from "~/types/globals/Status"
import { prisma } from "../../config/prisma"
export class StatusDB {
  test(text: string) {
    return text
  }
  async initStatus() {
    return prisma.status.createMany({
      data: [
        {
          id: "Pending",
        },
        {
          id: "Accepted",
        },
        {
          id: "Delivered",
        },
        {
          id: "Cancelled",
        },
      ],
    })
  }
  async createOne(id: TStatus) {
    return prisma.status.upsert({
      where: { id },
      create: { id },
      update: { id },
    })
  }
  async checkStatus(): Promise<Role[]> {
    return prisma.status.findMany()
  }
  async deleteMany() {
    return prisma.status.deleteMany({
      where: {
        id: {
          in: ["Pending", "Accepted", "Delivered", "Cancelled"],
        },
      },
    })
  }
}
