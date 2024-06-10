import type { User } from "@prisma/client"

export type MessageContact = {
  name: string
  time: Date
  msg: MessageList["msg"]
  img: string
  id: string
  message: MessageList[]
  read: boolean
}

export type MessageList = {
  name: string
  time: Date
  msg: string
  id: string
}

export type ContactList = {
  id: string
  name: string
  people: User[]
}
