import type { Product, User } from "@prisma/client"
import type { ProfileCompany } from "../market/profile"

export type OrderProps = {
  id: string
  status: string
  trolly: Product[]
  userBuy: User
  dateBuy: Date
}
