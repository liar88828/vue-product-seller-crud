export type MessageListServer = {
  type: TypeMessage
  name: string
  link: string
  time: Date
  id: string
  read: boolean
  img: string
  msg: string
}
export type MessageListClient = {
  type: TypeMessage
  name: string
  link: string
  time: Date | string
  id: string
  read: boolean
  img: string
  msg: string
}
