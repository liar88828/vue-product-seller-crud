import type { User } from "@prisma/client"

export type MessageContact = {
  name: string
  time: Date
  msg: MessageListServer["msg"]
  img: string
  id: string
  message: MessageListServer[]
  read: boolean
}

export type MessageListServer = {
  name: string
  time: Date
  msg: string
  id: string
}

export type MessageListClient = {
  name: string
  time: Date | string
  msg: string
  id: string
}
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
