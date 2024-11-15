import type { User } from "@prisma/client"
import type { MessageChatServer } from "./chat"

export type ContactList = {
  id: string
  name: string
  people: User[]
}
// ------------new type
export type Contact = {
  id: string
  people: User
  Message: Message[]
}
export type Message = {
  id: string
  time: Date
  msg: string
  read: boolean
}
