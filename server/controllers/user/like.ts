import type { Like, Product } from "@prisma/client"
import type { H3Event } from "h3"
import { prisma } from "~/server/config/prisma"
import { sessionId } from "./sessionId"

export class UserLikeController {
  async all(event: H3Event): Promise<Like[]> {
    const { session } = await getUserSession(event)

    return prisma.like.findMany({
      where: { id: session.id_like },
    })
  }

  async id(event: H3Event): Promise<Like[]> {
    const { session, id } = await sessionId(event)
    return prisma.likeBox.findMany({
      where: { id: session.id_like, id_product: id },
    })
  }

  async add(event: H3Event): Promise<Like> {
    const { session, id } = await sessionId(event)
    return prisma.likeBox.create({
      data: { id_product: id, id: session.id_like },
    })
  }

  async unLike(event: H3Event): Promise<Like> {
    const { session, id } = await sessionId(event)
    return prisma.likeBox.delete({
      where: { id: session.id_like, id_product: id },
    })
  }

  async productLike(event: H3Event): Promise<Product[]> {
    const { session } = await getUserSession(event)
    return prisma.product.findMany({
      where: { id: session.id_like },
    })
  }
}

export const likeController = new UserLikeController()
