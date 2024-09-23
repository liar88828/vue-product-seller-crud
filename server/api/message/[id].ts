import { dataChat1 } from "~/assets/example/message/dataMessage"
import { prisma } from "~/server/config/prisma"

export default defineEventHandler(async (event) => {
  const session = "1"
  const chats = prisma.messageList.findMany({
    where: {
      // id_user: session,
    },
    take: 100,
    orderBy: {
      time: "desc",
    },
  })

  return { chat: dataChat1 }
})
