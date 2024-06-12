import { prisma } from "~/server/config/prisma"
import type { ProductItemServer } from "~/types/product/item"

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)

  const product: ProductItemServer | null = await prisma.product.findUnique({
    include: {
      Spec: {
        include: {
          list: true,
        },
      },
      Tech: true,
      Desc: true,
      Img: true,
    },
    where: { id: Number(id) },
  })
  return { product }
})
