import type { Market, Order, Product, User } from "@prisma/client"

export type DataMarket = Order & {
  market: Market
  trolly: Product[]
  userBuy: User
}
