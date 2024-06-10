import { prisma } from "~/server/config/prisma"

export default defineEventHandler(async (event) => {
  const trending = await prisma.product.findMany({ take: 100 })
  const newProduct = await prisma.product.findMany({ take: 100 })
  const bestProduct = await prisma.product.findMany({ take: 100 })

  setResponseStatus(event, 200)
  return { trending, newProduct, bestProduct }

  // success: true,
  // code: 200,
})
