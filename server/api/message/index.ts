import { prisma } from "~/server/config/prisma"

export default defineEventHandler(async (event) => {
  const message = await prisma.messageContact
  return { message }
})
