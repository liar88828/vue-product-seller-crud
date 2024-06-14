export class FollowDB {
  findMarket(id: number) {
    return prisma.follow.count({
      where: { id },
    })
  }
}
