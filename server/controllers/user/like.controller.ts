import type { Like } from "@prisma/client"
import type { H3Event } from "h3"
import { type ILikeService, likeService } from "~/server/services/like.service"

export class UserLikeController {
  constructor(private serviceLike: ILikeService) {}
  async all(event: H3Event): Promise<Like[]> {
    const { session } = await getUserSession(event)

    return prisma.like.findMany({
      where: { id_user: session.id },
    })
  }

  async id(event: H3Event): Promise<Like | null> {
    const { session } = await getUserSession(event)
    const { id } = getQuery(event)
    return prisma.like.findFirst({
      where: { id_user: session.id, id_product: Number(id) },
    })
  }

  async LikeProduct(event: H3Event): Promise<Like> {
    const { session } = await getUserSession(event)
    const { id } = getQuery(event)
    return this.serviceLike.likeProduct(Number(id), session)
  }

  async unLike(event: H3Event): Promise<Like> {
    const { session, id } = await sessionId(event)
    return prisma.like.delete({
      where: { id_user: session.id, id: id },
    })
  }

  async findAllProductLike(event: H3Event): Promise<LikeProduct[]> {
    const { session } = await getUserSession(event)
    return prisma.like.findMany({
      where: { id_user: session.id },
      include: {
        Product: true,
      },
    })
  }
}

export const likeController = new UserLikeController(likeService)
