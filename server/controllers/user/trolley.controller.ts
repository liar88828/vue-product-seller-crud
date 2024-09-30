import type { Box, Trolley } from "@prisma/client"
import type { H3Event } from "h3"
import type { TrolleyMark, TrolleyProduct } from "~/types/trolley"

export class TrolleyController {
  constructor(private serviceTrolley: ITrolleyService) {}

  async id(id_user: string, id_trolley: number): Promise<TrolleyProduct[]> {
    // const trolley = await db.trolley.id(id_user)
    return this.serviceTrolley.findTrolley(id_trolley)
  }

  async trolleyId(event: H3Event): Promise<BoxProduct[]> {
    return tryCatch(async () => {
      const { session } = await sessionId(event)
      const { id } = await getRouterParams(event)
      return this.serviceTrolley.id({
        id_user: session.id,
        id_trolley: Number(id),
      })
    })
  }

  async mark(event: H3Event): Promise<Trolley> {
    return tryCatch(async () => {
      const { session } = await sessionId(event)
      const { id } = await getQuery(event)
      let data = (await readBody(event)) as TrolleyMark
      // console.log("will execute")
      return this.serviceTrolley.mark(
        {
          id_trolley: Number(id),
          mark: data.mark,
        },
        session
      )
    })
  }

  async findAllMark(event: H3Event): Promise<TrolleyProduct[]> {
    return tryCatch(async () => {
      const { session } = await sessionId(event)
      return this.serviceTrolley.findAllMark(session)
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
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      return this.serviceTrolley.notify({ id_user: session.id })
    })
  }

  async push(event: H3Event): Promise<Trolley> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      const { id } = getQuery(event)
      return this.serviceTrolley.push({ id_product: Number(id) }, session)
    })
  }

  async add(event: H3Event): Promise<Trolley> {
    return tryCatch(async () => {
      let data = await readBody(event)
      const { session } = await getUserSession(event)
      return this.serviceTrolley.add(data, session)
    })
  }

  async increment(event: H3Event): Promise<Trolley> {
    return tryCatch(async () => {
      let data = await readBody(event)
      const { session } = await sessionId(event)
      return this.serviceTrolley.increment(data, session)
    })
  }

  async decrement(event: H3Event): Promise<Trolley> {
    return tryCatch(async () => {
      let data = await readBody(event)
      const { session } = await sessionId(event)

      return this.serviceTrolley.decrement(data, session)
    })
  }

  async delete(id_trolley: number): Promise<Trolley> {
    return tryCatch(async () => {
      return this.serviceTrolley.delete({ id_trolley })
    })
  }

  async homeTrolley(id_user: string, id_trolley: number) {
    return tryCatch(async () => {
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
    })
  }
}

export const trolleyController = new TrolleyController(trolleyService)
export type ITrolleyController = TrolleyController
