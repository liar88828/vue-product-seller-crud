import type { Product } from "@prisma/client"
import getZod from "~/utils/getZod"

export default defineEventHandler(async (event) => {
  const body: Product = await readBody(event)
  const data = getZod.createProductSchema.parse(body)
  const dataService = control.sanitize.product(data)
  const product = await db.product.create(dataService)
  return { product }
  // if (!success) {
  //   throw createError({ statusCode: 400, statusMessage: "Invalid Data" })
  // }
})
