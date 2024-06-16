import type { Box, Market, Order, Product, Trolly, User } from "@prisma/client"
import type { MarketServerValid, ProfileMarket } from "./ProfileCompany"
import type { TStatus } from "../globals/Status"
import type { IfEqual, IfEquals } from "../globals/generic"

// export type OrderProps = {
//   id: number
//   discount: number
//   status: string
//   promoCode: string
//   dateBuy: Date
//   expired: Date
//   id_userBuy: string
//   id_market: number
//   userBuy: User
//   Market: ProfileMarket
//   trolly: Product[]
//   // Market: DataCompany
// }

export type DataMarket = Order & {
  userBuy: User
  Market: Market
  Product: Product[]
}

export type OrderConfirm = Order & {
  userBuy: User
  Market: Market
}

export type OrderProps = Order & {
  userBuy: User
  Market: MarketServerValid
  trolly: Product[]
}
// export type OrderDetail = Order & {
//   userBuy: User | null
//   market: Market
//   trolly: Product[]
// }
// type test = IfEqual<OrderProps, Order>
// const Test: test = "different"

export type SanitizePackage = {
  id_transaction: number
  box: Box[]
}
