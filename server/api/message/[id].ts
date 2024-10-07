export default defineEventHandler(async (event) => {
  const data = {
    chat: dataChat1,
    toJson(): MessageChatServer[] {
      return this.chat
    },
  }
  return data
})
