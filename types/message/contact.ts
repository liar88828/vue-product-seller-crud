export type MessageContact = {
  name: string
  time: Date
  msg: MessageChatServer["msg"]
  img: string
  id: string
  message: MessageChatServer[]
  read: boolean
}
