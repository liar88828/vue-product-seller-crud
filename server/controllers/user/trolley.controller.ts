import type { Box, Trolley } from "@prisma/client"
import type { H3Event } from "h3"

export class TrolleyController {
  constructor(private serviceTrolley: ITrolleyService) {}

  async id(id_user: string, id_trolley: number): Promise<TrolleyProduct[]> {
    // const trolley = await db.trolley.id(id_user)
    return this.serviceTrolley.findTrolley(id_trolley)
  }

  async userProductId(event: H3Event): Promise<BoxProduct[]> {
    return tryCatch(async () => {
      const { session } = await sessionId(event)
      const { id } = await getRouterParams(event)
      return this.serviceTrolley.userProductId({
        id_user: session.id,
        id_trolley: Number(id),
      })
    })
  }

  async all(event: H3Event): Promise<NewTolleyProps[]> {
    const { session } = await sessionId(event)
    return this.serviceTrolley.all({
      // id_trolley: session.id,
      id_user: session.id,
    })
  }

  // async _all(event: H3Event): Promise<TrolleyAllService> {
  //   const { session } = await sessionId(event)
  //   return this.serviceTrolley._all({
  //     id_trolley: session.id_trolley,
  //     id_user: session.id,
  //   })
  // }

  async notify(event: H3Event): Promise<number> {
    const { session } = await getUserSession(event)
    return this.serviceTrolley.notify({ id_user: session.id })
  }

  async push(event: H3Event): Promise<Trolley> {
    let data = await readBody(event)
    const { session } = await sessionId(event)

    return this.serviceTrolley._push(data, session)
  }

  async delete(id_trolley: number): Promise<Trolley> {
    return this.serviceTrolley.delete({ id_trolley })
  }

  async homeTrolley(id_user: string, id_trolley: number) {
    return prisma.trolley.findUnique({
      where: {
        id: id_trolley,
        User: {
          id: id_user,
        },
      },
      include: {
        Box: {
          // include: {
          //   Product: true,
          // },
        },
      },
    })
  }
}

export const trolleyController = new TrolleyController(trolleyService)
export type ITrolleyController = TrolleyController
