import type { HomeApi } from "~/types/home/props"
import { tryCatch } from "../lib/tryCatch"

export class HomeServices {
  async index(): Promise<HomeApi> {
    return tryCatch(async () => {
      const trending = await db.product.findTest()
      const newProduct = await db.product.findTest()
      const bestProduct = await db.product.findTest()
      return {
        trending,
        newProduct,
        bestProduct,
      }
    })
  }
}
