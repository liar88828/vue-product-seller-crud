import { prisma } from "~/server/config/prisma"
import { countUnRead, dataNotifies } from "~/assets/example/message/dataMessage"

export default defineEventHandler(async (event) => {
  // const message = await prisma.
  return { countUnRead, dataNotifies }
})
