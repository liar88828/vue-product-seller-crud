import { prisma } from "~/server/config/prisma"

export default defineEventHandler(async (event) => {
  console.time()
  const data = await prisma.user.findFirst()
  console.timeEnd()
  return data
})
