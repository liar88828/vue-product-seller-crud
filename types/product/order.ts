import type { Product, User } from "@prisma/client"
import type { ProfileCompany } from "../profile/profile"

export type OrderProps = {
  id: string
  status: string
  trolly: Product[]
  userBuy: User
  Market: ProfileCompany
  dateBuy: Date
  expired: Date
  promoCode: string
  discount: number
}
