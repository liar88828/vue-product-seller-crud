import type { Like } from "@prisma/client"
import type { H3Event } from "h3"
import { prisma } from "~/server/config/prisma"
import { SessionIdClass } from "./SessionIdClass"

export class UserLikeController extends SessionIdClass {
  constructor(protected readonly event: H3Event) {
    super(event)
  }
  async all(): Promise<Like[]> {
    const { session } = await getUserSession(this.event)

    return prisma.like.findMany({
      where: { id: session.id_like },
    })
  }

  async id(): Promise<Like[]> {
    const { session, id } = await this.sessionId()
    return prisma.likeBox.findMany({
      where: { id: session.id_like, id_product: id },
    })
  }

  async add(): Promise<Like> {
    const { session, id } = await this.sessionId()
    return prisma.likeBox.create({
      data: { id_product: id, id: session.id_like },
    })
  }

  async unLike(): Promise<Like> {
    const { session, id } = await this.sessionId()
    return prisma.likeBox.delete({
      where: { id: session.id_like, id_product: id },
    })
  }
}
