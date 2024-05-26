import type { Product, User } from "@prisma/client"

export type Purchase = {
  userBuy: User
  id: string
  trolly: Product[]
  dateBuy: Date
}
