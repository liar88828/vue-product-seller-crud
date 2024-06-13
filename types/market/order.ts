import type { Product, User } from "@prisma/client"
import type { ProfileCompany } from "./ProfileCompany"
import type { DataCompany } from "./confirm"

export type OrderProps = {
  id: string
  status: string
  dateBuy: Date
  expired: Date
  promoCode: string
  discount: number
  //
  trolly: Product[]
  userBuy: User
  Market: ProfileCompany
  // Market: DataCompany
}
