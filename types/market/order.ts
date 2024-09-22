import type { Box, Market, Product, Transaction, User } from "@prisma/client"
import type { MarketClient, MarketServerFull } from "./ProfileCompany"
import type { CreateTransaction } from "../transaction"
import type { BoxProduct, GetBoxProps } from "../transaction/trolly"

export type DataMarket = Transaction & {
  userBuy: User
  Market: Market
  Box: BoxProduct[]
}

export type TBoxProduct = Box & {
  Product: Product | null
}
export type TransServer = Transaction & {
  userBuy: User
  Market: Market
  Box: TBoxProduct[]
}

export type TransactionClient = Omit<
  Transaction,
  "dateExp" | "updatedAt" | "createdAt"
>

export type TransClient = TransactionClient & {
  updatedAt: string
  createdAt: string
  dateExp: string
} & {
  userBuy: User
  Market: MarketClient
  Box: TBoxProduct[]
}
export type HBoxProducts = Box & Product

export type HistoryServer = Transaction & {
  userBuy: User
  Market: Market
  Box: HBoxProducts[]
}

export type HistoryClient = TransactionClient & {
  dateExp: string
  updatedAt: string
  createdAt: string
} & {
  userBuy: User
  Market: MarketClient
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
