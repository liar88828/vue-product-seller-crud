import type { Box, Market, Product, Transaction, User } from "@prisma/client"
import type { MarketServerFull, } from "./ProfileCompany"
import type { CreateTransaction } from "../transaction"
import type { BoxProduct, GetBoxProps } from "../transaction/trolly"

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

export type DataMarket = Transaction & {
  userBuy: User
  Market: Market
  Box: BoxProduct[]
}
// export type DataMarketProps = Transaction & {
//   userBuy: User
//   Market: Market
//   Box: (Box & {
//     Product: Product //| null
//   })[]
export type TBoxProduct = Box & {
  Product: Product | null
};
export type TransProps = Transaction & {
  userBuy: User
  Market: Market
  Box: TBoxProduct[]
}

export type HBoxProducts = Box & Product
export type HistoryProps = Transaction & {
  userBuy: User
  Market: Market
  Box: HBoxProducts[]
}

export type OrderConfirm = Transaction & {
  userBuy: User
  Market: Market
}

// export type OrderDetail = Order & {
//   userBuy: User | null
//   market: Market
//   trolly: Product[]
// }
// type test = IfEqual<OrderProps, Order>
// const Test: test = "different"

export type CreateBox = {
  id_transaction: number
  box: Box[]
}

export type WantBuyProps = {
  id_user: User["id"]
  id_trolly: number
  data: {
	box: GetBoxProps[]
	data: CreateTransaction
  }
}

export type PackageCreate = {
  box: Box[]
  // user:User
}

export type CheckTransaction = {
  id_buyer: string
  drop_address: string | null
  id_status: string
}
export type PayProps = {
  market: MarketServerFull
  order: DataMarket
}
