export type NotifyProps = {
  class?: string
  title?: string
  count?: number
  read?: boolean
}
export type NotifyMessageServer = {
  type: TypeMessage
  name: string
  link: string
  time: Date
  id: string
  read: boolean
  img: string
  msg: string
}
export type NotifyMessageClient = {
  type: TypeMessage
  name: string
  link: string
  time: Date | string
  id: string
  read: boolean
  img: string
  msg: string
}

export type TypeMessage =
  | "Message"
  | "Transaction"
  | "Confirm"
  | "User"
  | "Admin"
  | "Select"
export type FilterMessage = { value: TypeMessage; name: string }
