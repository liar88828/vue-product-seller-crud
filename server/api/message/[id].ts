import { dataChat1 } from "~/assets/example/message/dataMessage"

export default defineEventHandler(async (event) => {
  const data = {
    chat: dataChat1,
    toJson(): { chat: MessageListServer[] } {
      return { chat: this.chat }
    },
  }
  return data
})
