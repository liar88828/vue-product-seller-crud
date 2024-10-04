import { countUnRead, dataNotifies } from "~/assets/example/message/dataMessage"

export default defineEventHandler(async (event) => {
  // const message = await prisma.

  // return { count: countUnRead, notify: dataNotifies }
  const data = {
    list: dataNotifies,
    toJson() {
      return this.list
    },
  }
  return data
})
