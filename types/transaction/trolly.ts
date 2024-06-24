import type { Box, Product, Transaction, Trolly, User } from "@prisma/client"
import type { Remove } from "../market/ProfileCompany"

export type BoxCreate = Omit<Box, "id" | "id_transaction">

export type GetBoxProps = Omit<Box, "id" | "id_trolly">
// export type PushTrolly = Omit<Box>
export type GetPackageProps = Omit<Box, "id" | "id_transaction">
export type GetBoxReturn = Remove<Box>
export type GetPackageReturn = Remove<Box>

export type MyTrollyReturn = (Trolly & {
  User: User | null
  Box: Box[]
})[]

export type BoxProduct = Box & {
  Product: Product | null
}
export type TransactionId = Transaction & {
  Box: BoxProduct[]
}

export type IdBox = {
  id_trolly: number
  id_product: number
  id_box: number
}

export type BoxProductTrolly = Box & {
  Product: Product | null
}
export type TollyProps = Trolly & {
  Box: BoxProductTrolly[]
}
export type TrollyAllService = {
  trolleys: Trolly[]
  boxs: TollyProps["Box"][]
  products: ProductTrolly[]
}
