import { prisma } from "~/server/config/prisma"
import type { IdLike } from "~/types/user/like"

export class LikeDB {
  get(id: number) {
    return prisma.like.findMany({
      where: { id },
    })
  }
  add({ id_product, id_user }: IdLike) {
    return prisma.like.create({
      data: {
        id_product,
        id_user,
      },
    })
  }

  unLike(id: number) {
    return prisma.like.delete({
      where: { id },
    })
  }
}
