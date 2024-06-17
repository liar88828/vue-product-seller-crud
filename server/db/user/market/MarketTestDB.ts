import { prisma } from "~/server/config/prisma"

export class MarketTestDB {
  test(text: string) {
    return text
  }

  async testUserId(id_user: string) {
    return prisma.market.findMany({ where: { User: { id: id_user } } })
  }

  async testId(id: number) {
    return prisma.market.findUnique({ where: { id } })
  }
  async testAll() {
    return prisma.market.findMany()
  }
}
