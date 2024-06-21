import { prisma } from "~/server/config/prisma"
import type { IdLike } from "~/types/user/like"
import type { Like } from "@prisma/client"

export class LikeDB {
  all(id: number): Promise<Like[]> {
    return prisma.like.findMany({
      where: { id },
    })
  }
  id(id: number, id_product: number): Promise<Like[]> {
    return prisma.likeBox.findMany({
      where: { likeId: id, productId: id_product },
    })
  }

  add({ id_product, id }: IdLike): Promise<Like> {
    return prisma.likeBox.create({
      data: { productId: id_product, id },
    })
  }

  unLike(id: number, id_product: number): Promise<Like> {
    return prisma.likeBox.delete({
      where: {
        id: id,
        // likeId: id,
        productId: id_product,
      },
    })
  }
}
