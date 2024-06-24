import type { Box } from "@prisma/client"
import type {
  BoxCreate,
  BoxProduct,
  GetBoxReturn,
  IdBox,
  TollyProps,
} from "~/types/transaction/trolly"
import { prisma } from "~/server/config/prisma"
import { CheckOutDB } from "../transaction/CheckOutDB"

export class TrollyMutation extends CheckDB {
  checkout = new CheckOutDB()

  async checkTrolly(id_user: string) {
    const found = await prisma.trolly.findMany({
      select: {
        id: true,
      },
      where: {
        User: { id: id_user },
      },
    })
    if (!found) {
      const create = await prisma.trolly.create({
        data: {
          User: {
            connect: {
              id: id_user,
            },
          },
        },
      })
      return create
    }
  }

  async createTrolly(id: string, box: GetBoxReturn[]) {
    await this.checkTrolly(id)

    const trolly = await prisma.trolly.create({
      data: { User: { connect: { id } } },
    })

    const boxs = await prisma.box.createMany({ data: box })
    return { trolly, boxs }
  }

  async check(id_trolly: number) {
    return prisma.trolly.upsert({
      where: { id: id_trolly },
      update: {},
      create: {},
    })
  }

  async delete({ id_trolly, id_product, id_box }: IdBox): Promise<Box> {
    return prisma.box.delete({
      where: {
        id_trolly,
        id_product,
        id: id_box,
      },
    })
  }
}

export class TrollyDB extends TrollyMutation {
  async myNotify(id: string, page: number): Promise<number> {
    return prisma.trolly.count({
      where: {
        User: {
          id,
        },
      },
    })
  }

  async all({ id_trolly, id_user }: IdTrolly): Promise<TollyProps[]> {
    return prisma.trolly.findMany({
      where: { id: id_trolly, User: { id: id_user } },
      include: {
        Box: {
          include: {
            Product: true,
          },
        },
      },
      take: 100,
    })
  }

  async id(id: string): Promise<number> {
    const data = await prisma.user
      .findUnique({
        where: { id },
        select: {
          Trolly: true,
        },
      })
      .then((data) => data?.Trolly?.id)

    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Trolly not found",
      })
    }
    return data
  }

  async findBox(id_trolly: number): Promise<BoxProduct[]> {
    const data = await prisma.box.findMany({
      where: { id_trolly },
      include: { Product: true },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Box not found",
      })
    }
    return data
  }
  async productId(
    id_trolly: number,
    id_product: number,
    id_user: string
  ): Promise<BoxProduct[]> {
    const data = await prisma.box.findMany({
      where: {
        id_trolly,
        id_product,
        Trolly: {
          User: { id: id_user },
        },
      },
      include: { Product: true },
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
export type IdTrolly = {
  id_user: string
  id_trolly: number
}
