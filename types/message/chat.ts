export type MessageChatServer = {
  name: string
  time: Date
  msg: string
  id: string
}

export type MessageChatClient = {
  name: string
  time: Date | string
  msg: string
  id: string
}
