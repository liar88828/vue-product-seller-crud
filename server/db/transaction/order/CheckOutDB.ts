import type { Trolley } from "@prisma/client"
import { prisma } from "~/server/config/prisma"

export class CheckOutDB {
  async find(id: number) {
    const data = await prisma.trolley.findUnique({
      where: { id },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Trolley not found",
      })
    }
    return data
  }

  async all(id_user: string, id_checkout: number): Promise<Trolley[]> {
    const data = await prisma.trolley.findMany({
      // where: { User: { id: id_user } },
    })
    return data
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

export const checkoutDB = new CheckOutDB()
