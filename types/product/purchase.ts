import type { Product, User } from "@prisma/client"

export type Purchase = {
  id: string
  userBuy: User
  trolly: Product[]
  dateBuy: Date
}
