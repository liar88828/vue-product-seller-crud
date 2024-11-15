import type {
  Box,
  Market,
  Product,
  Transaction,
  Trolley,
  User,
} from "@prisma/client"
import type { MarketClient, MarketServerFull } from "./ProfileCompany"
import type { CreateTransaction } from "../transaction"
import type { BoxProduct, GetBoxProps } from "../trolley"

export type DataMarket = Transaction & {
  User: User
  Market: Market
  Trolley: TrolleyProduct[]
}

export type HistoryDetail = Transaction & {
  User: User
  Market: Market
  Trolley: Trolley & {
    Product: Product
  }
}

export type TBoxProduct = Box & {
  Product: Product | null
}
export type TransServer = Transaction & {
  User: User
  Market: Market
  Trolley: TrolleyProductItem[]
}

export type TransactionClient = Omit<
  Transaction,
  "dateExp" | "updatedAt" | "createdAt"
> & {
  dateExp: Date | string
  createdAt: Date | string
  updatedAt: Date | string
}

export type TransClient = TransactionClient & {
  updatedAt: string
  createdAt: string
  dateExp: string
} & {
  User: User
  Market: MarketClient
  Trolley: TrolleyProductItem[]
}

export type HBoxProducts = Box & Product

export type TrolleyProductItem = Trolley & {
  Product: Product
}

export type TrolleyProductTransaction = {
  User: User
  Market: Market
  Trolley: TrolleyProductItem[]
}

export type HistoryServer = Transaction & TrolleyProductTransaction

export type HistoryClient = TransactionClient & {
  User: User
  Market: MarketClient
  Trolley: TrolleyProductItem[]
}

export type OrderConfirm = Transaction & {
  User: User
  Market: Market
}

// export type OrderDetail = Order & {
//   User: User | null
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
  order: TransServer
}

export type MarketOrder = {
  market: MarketServerFull
  order: TransServer
}

export type TransactionConfirmServer = Transaction & {
  Market: Market
  Trolley: TrolleyProduct[]
}

export type TransactionConfirmClient = TransactionClient & {
  Market: MarketClient
  Trolley: TrolleyProduct[]
}
