import { dataCompany } from "~/assets/example/user/dataCompany"
import { prisma } from "~/server/config/prisma"
export default defineEventHandler(async (event) => {
  const session = 1
  const data = await prisma.company.findUnique({ where: { id: session } })

  return { profile: dataCompany }
})
