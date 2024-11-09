import { exampleMessageListItem } from "~/assets/example/message/list"

export default defineEventHandler(async (event) => {
  const data = {
    list: exampleMessageListItem,
    toJson(): MessageListServer[] {
      return this.list
    },
  }
  return data
})
