import { prisma } from "~/server/config/prisma"

export class CheckOutDB {
  async find(id: number) {
    const data = await prisma.trolly.findUnique({
      where: { id },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Trolly not found",
      })
    }
    return data
  }

  async all(id_user: string, id_checkout: number) {
    const data = await prisma.trolly.findMany({
      where: { User: { id: id_user } },
    })
  }
  async detail(id_user: string, id_checkout: number) {
    return db.product.findTest()
  }
  async create(id_user: string) {
    return db.product.findTest()
  }
  async delete(id_user: string, id_checkout: number) {
    return db.product.findTest()
  }
}
