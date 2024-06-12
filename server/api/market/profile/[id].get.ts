import { dataCompany } from "~/assets/example/user/dataCompany"
import { prisma } from "~/server/config/prisma"

export default defineEventHandler(async (event) => {
  const id = getRouterParams(event).id
  const data = await prisma.company.findUnique({ where: { id: Number(id) } })

  return { profile: dataCompany }
})
