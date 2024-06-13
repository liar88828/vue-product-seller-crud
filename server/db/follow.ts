import { prisma } from "../config/prisma"

export class FollowDB {
  findMarket(id: number) {
    return prisma.follow.count({
      where: { id },
    })
  }
}
