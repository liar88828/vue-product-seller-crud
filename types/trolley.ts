import type { Box, Product, Transaction, Trolley, User } from "@prisma/client"
import type { Remove } from "./market/ProfileCompany"

export type TrolleyCreateServer = Omit<Trolley, "id_transaction" | "mark">

export type TrolleyCreateClient = {
  id_trolley: number
  id_product: number
  qty: number
  mark: boolean
}

// export type TrolleyCreateClientCount = {
//   id_trolley: number
//   id_product: number
// }

export type GetBoxProps = Omit<Box, "id" | "id_trolly">
// export type PushTrolly = Omit<Box>
export type GetPackageProps = Omit<Box, "id" | "id_transaction">
export type GetBoxReturn = Remove<Box>
export type GetPackageReturn = Remove<Box>

export type MyTrollyReturn = (Trolley & {
  User: User | null
  Box: Box[]
})[]

export type BoxProduct = Box & {
  Product: Product | null
}
export type TransactionId = Transaction & {
  Box: BoxProduct[]
}

export type TransactionProduct = Transaction & {
  Trolley: (Trolley & {
    Product: Product
  })[]
}

export type BoxProductTrolly = Box & {
  Product: Product | null
}
export type TolleyProps = Trolley & {
  Box: BoxProductTrolly[]
}

export type NewTolleyProps = Trolley & {
  // Box: Box[]
  Product: Product
}

export type TrollyAllService = {
  trolleys: Trolley[]
  boxs: TolleyProps["Box"][]
  products: Product[]
}
export type IdTrolley = {
  id_user: string
  id_trolley: number
  id_product: number
}

export type TrolleyProduct = Trolley & {
  Product: Product
}
export type TrolleyMark = Pick<TrolleyCreateClient, "id_trolley" | "mark">
export type TrolleyCounter = Omit<TrolleyCreateClient, "mark">
