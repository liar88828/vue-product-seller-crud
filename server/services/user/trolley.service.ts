import type { Trolley } from "@prisma/client"
export class TrolleyService {
  // trolley is not buy just add trolley, box, product
  // and not add transaction
  constructor(private sanitizeTrolley: ITrolleySanitize) {}

  async findTrolley(id_trolley: number): Promise<TrolleyProduct[]> {
    const data = await prisma.trolley.findMany({
      where: { id: id_trolley, id_transaction: null },
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
    { id_product }: Pick<TrolleyCreateClient, "id_product">,
    session: SessionUser
  ) {
    // data = this.sanitizeTrolley.sanitize(data, session)

    return prisma.$transaction(async (tx) => {
      const trolleyDB = await tx.trolley.findFirst({
        where: {
          id_product: id_product,
          id_user: session.id,
          id_transaction: null,
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

  async add(data: TrolleyCreateClient, session: SessionUser) {
    const valid = this.sanitizeTrolley.sanitize(data, session)
    return await prisma.trolley.update({
      where: {
        id: valid.id,
        id_user: valid.id_user,
        id_product: valid.id_product,
      },
      data: {
        qty: data.qty,
      },
    })
  }

  async increment(data: TrolleyCreateClient, session: SessionUser) {
    const valid = this.sanitizeTrolley.sanitize(data, session)
    return await prisma.trolley.update({
      where: {
        id: valid.id,
        id_user: valid.id_user,
        id_product: valid.id_product,
      },
      data: {
        qty: {
          increment: 1,
        },
      },
    })
  }

  async decrement(data: TrolleyCreateClient, session: SessionUser) {
    const valid = this.sanitizeTrolley.sanitize(data, session)
    return await prisma.trolley.update({
      where: {
        id: valid.id,
        id_user: valid.id_user,
        id_product: valid.id_product,
      },
      data: {
        qty: {
          decrement: 1,
        },
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

  async all({
    id_user,
  }: Pick<IdTrolley, "id_user">): Promise<NewTolleyProps[]> {
    return prisma.trolley.findMany({
      where: { id_user: id_user, id_transaction: null },
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
        where: { id_user: id_user, id_transaction: null },
      })
      .then((data) => {
        if (!data) {
          return 0
        }
        return data
      })
  }

  async mark(
    { id_trolley, mark }: TrolleyMark,
    session: SessionUser
  ): Promise<Trolley> {
    // console.log(mark)
    const data = await prisma.trolley.update({
      where: { id: id_trolley, id_user: session.id },
      data: { mark },
    })

    return data
  }

  async findAllMark(session: SessionUser): Promise<TrolleyProduct[]> {
    return prisma.trolley.findMany({
      where: { mark: true, id_user: session.id, id_transaction: null },
      include: {
        Product: true,
      },
    })
  }

  async id({
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
