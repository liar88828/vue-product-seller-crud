import { prisma } from "~/server/config/prisma"
import { DataProduct } from "~/types/product/DataProduct"

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)

  const product: DataProduct | null = await prisma.product.findUnique({
    include: { Spec: true, Tech: true, Desc: true, Img: true },
    where: { id: Number(id) },
  })
  return { product }
})
