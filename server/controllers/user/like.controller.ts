import type { Like } from "@prisma/client"
import type { H3Event } from "h3"

export class UserLikeController {
  async all(event: H3Event): Promise<Like[]> {
    const { session } = await getUserSession(event)

    return prisma.like.findMany({
      where: { id_user: session.id },
    })
  }

  async id(event: H3Event): Promise<Like[]> {
    const { session, id } = await sessionId(event)
    return prisma.like.findMany({
      where: { id_user: session.id, id_product: id },
    })
  }

  async add(event: H3Event): Promise<Like> {
    const { session, id } = await sessionId(event)
    return prisma.like.create({
      data: { id_user: session.id, id_product: id },
    })
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

export const likeController = new UserLikeController()
