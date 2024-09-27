import type { Trolley } from "@prisma/client"
export class TrolleyService {
  // trolley is not buy just add trolley, box, product
  // and not add transaction
  constructor(private sanitizeTrolley: ITrolleySanitize) {}

  async findTrolley(id_trolley: number): Promise<TrolleyProduct[]> {
    const data = await prisma.trolley.findMany({
      where: { id: id_trolley },
      include: { Product: true },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Trolley not found",
      })
    }
    return data
  }

  async push(
    { id_product }: Pick<TrolleyCreate, "id_product">,
    session: SessionUser
  ) {
    // data = this.sanitizeTrolley.sanitize(data, session)

    return prisma.$transaction(async (tx) => {
      const trolleyDB = await tx.trolley.findFirst({
        where: {
          id_product: id_product,
          id_user: session.id,
        },
      })
      if (trolleyDB) {
        return tx.trolley.update({
          where: {
            id: trolleyDB.id,
          },
          data: {
            qty: { increment: 1 },
          },
        })
      } else {
        return tx.trolley.create({
          data: {
            qty: 1,
            id_product: id_product,
            id_user: session.id,
          },
        })
      }
      throw createError({
        statusCode: 500,
        statusMessage: "Internal Server Error",
      })
    })
  }

  async add(data: TrolleyCreate, session: SessionUser) {
    data = this.sanitizeTrolley.sanitize(data, session)

    return await prisma.trolley.update({
      where: {
        id: data.id,
      },
      data: {
        qty: data.qty,
      },
    })
  }
  async delete({
    id_trolley,
  }: Pick<IdTrolley, "id_trolley">): Promise<Trolley> {
    id_trolley = zods.id.number.parse(id_trolley)

    return prisma.trolley.delete({
      where: {
        id: id_trolley,
      },
    })
  }
  // async _all(id: IdTrolley): Promise<TrolleyAllService> {
  //   const trolleys = await db.trolley.all(id)
  //   const boxs = trolleys.map((trolley) => trolley.Box.map((box) => box))
  //   const products = boxs.flatMap((box) =>
  //     box.map((d) => {
  //       if (d.Product !== null && d.Product !== undefined) {
  //         return d.Product
  //       }
  //     })
  //   )
  //   return {
  //     trolleys,
  //     boxs,
  //     products,
  //   }
  // }
  async all({
    id_user,
  }: Pick<IdTrolley, "id_user">): Promise<NewTolleyProps[]> {
    return prisma.trolley.findMany({
      where: { id_user: id_user },
      include: {
        // Box: true,
        Product: true,
      },
      take: 100,
    })
  }

  async notify({ id_user }: Pick<IdTrolley, "id_user">) {
    id_user = zods.id.string.parse(id_user)

    return prisma.trolley
      .count({
        where: { id_user: id_user },
      })
      .then((data) => {
        if (!data) {
          return 0
        }
        return data
      })
  }

  async userProductId({
    id_trolley,
    id_user,
  }: Omit<IdTrolley, "id_product">): Promise<TrolleyProduct[]> {
    const data = await prisma.trolley.findMany({
      where: {
        id: id_trolley,
        id_user: id_user,
        // productId: id_product,
      },
      include: {
        Product: true,
      },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Box not found",
      })
    }
    return data
  }
}
export const trolleyService = new TrolleyService(trolleySanitize)
export type ITrolleyService = TrolleyService
