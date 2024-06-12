import type { Company } from "@prisma/client"
import { prisma } from "~/server/config/prisma"
import type { DataPreview, ProductDetail } from "~/types/product/item"
import type { MarketStatic } from "~/types/profile/profile"

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const productDetail: ProductDetail["detail"] = await db.product.findFull(
    Number(id)
  )
  const productRelated = await db.product.findTest()
  const userPreview: DataPreview[] = await prisma.preview.findMany({
    include: {
      user: true,
    },
    where: {
      id_product: Number(id),
    },
  })

  const market = await prisma.product
    .findUnique({
      where: {
        id: Number(id),
      },
      select: {
        Company: true,
      },
    })
    .then((data) => data?.Company)

  const follow = await prisma.follow.count({
    where: {
      id: market?.id_follow ?? 0,
    },
  })

  const marketStatic: MarketStatic = {
    product: await db.product.counts(Number(id)),
    follow: follow,
    since: market?.since || new Date(),
    response: "100%",
  }

  const data: ProductDetail = {
    detail: productDetail,
    previews: userPreview,
    related: productRelated,
    static: marketStatic,
    market: market as Company,
  }

  return data
})
