export type MessageListProps = {
  name: string
  time: Date
  msg: MessageProps
  img: string
  id: string
  message: MessageProps[]
  read: boolean
}

export type MessageProps = {
  left: boolean
  name: string
  time: string
  msg: string
  id: string
}
