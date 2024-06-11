import type {
  Additional,
  Company,
  Contact,
  Order,
  Product,
  SocialMedia,
  User,
} from "@prisma/client"

export type DataCompany = Company & {
  Contact: Contact | null
  SocialMedia: SocialMedia | null
  Additional: Additional[]
  Order: Order[]
}

export type DataMarket = Order & {
  market: Company
  trolly: Product[]
  userBuy: User
}

export type Status = "Accepted" | "Pending" | "Delivered" | "Cancelled"
