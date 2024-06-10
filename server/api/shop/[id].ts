import { prisma } from "~/server/config/prisma"
import { ProductDetail } from "~/types/product/detail"
import { MarketStatic } from "~/types/profile/profile"

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const productDetail = await db.product.findFull(Number(id))
  const productRelated = await db.product.findTest()
  const userPreview = await prisma.preview.findMany({
    where: {
      id_product: Number(id),
    },
  })

  const market = await prisma.product.findUnique({
    where: {
      id: Number(id),
    },
    select: {
      Company: true,
    },
  })

  const follow = await prisma.follow.count({
    where: {
      id: market?.Company?.followId || 0,
    },
  })
  const marketStatic: MarketStatic = {
    product: await db.product.counts(Number(id)),
    follow: follow,
    since: market?.Company?.since || new Date(),
    response: "100%",
  }

  const data: ProductDetail = {
    dataDetail: productDetail,
    dataPreviews: userPreview,
    dataRelated: productRelated,
    static: marketStatic,
  }

  return data
})
