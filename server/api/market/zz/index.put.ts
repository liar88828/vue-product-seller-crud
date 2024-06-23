// can edit market profile
// find by session user
// return market profile
//
import { dataCompany } from "assets/example/user/dataCompany"
import { prisma } from "~/server/config/prisma"
export default defineEventHandler(async (event) => {
  const session = 1
  const data = await prisma.market.update({
    where: { id: session },
    data: { name: "test" },
  })

  return { profile: dataCompany }
})
