import { dataProducts } from "~/assets/example/product/dataProduct"
import { prisma } from "~/server/config/prisma"
export default defineEventHandler(async (event) => {
  const session = "123"
  const res = await prisma.product.findMany({
    where: {
      id_user: session,
    },
  })
  return { product: dataProducts }
})
