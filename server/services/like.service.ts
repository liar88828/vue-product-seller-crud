import type { Like } from "@prisma/client"

export class LikeService {
  async likeProduct(id_product: number, session: SessionUser): Promise<Like> {
    console.log("findLike execute")
    return prisma.$transaction(async (tx) => {
      const findLike = await tx.like.findFirst({
        where: {
          id_product,
          id_user: session.id,
        },
      })
      console.log(findLike, "findLike")
      if (!findLike) {
        return tx.like.create({
          data: { id_user: session.id, id_product },
        })
      } else {
        return tx.like.delete({
          where: {
            id: findLike.id,
          },
        })
      }
    })
  }
}
export const likeService = new LikeService()
export type ILikeService = LikeService
