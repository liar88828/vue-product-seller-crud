import { countUnRead, dataNotifies } from "~/assets/example/message/dataMessage"

export default defineEventHandler(async (event) => {
  // const message = await prisma.

  // return { count: countUnRead, notify: dataNotifies }
  const data = {
    count: countUnRead,
    toJson() {
      return {
        count: this.count,
      }
    },
  }
  return data
})
