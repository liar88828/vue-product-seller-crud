import type {
  Additional,
  Box,
  Contact,
  Market,
  SocialMedia,
  Transaction,
  User,
} from "@prisma/client"
import type { IfEquals, RequiredProperty } from "../globals/generic"
export type ProfileMarket = {
  id: number
  name: string
  industry: string
  address: string
  description: string
  mission: string
  vision: string
  history: string
  since: Date
  id_contact: number
  id_socialMedia: number
  id_user: string
  id_follow: number
  Contact: {
    id: number
    email: string
    phone: string
    website: string
  }
  SocialMedia: {
    id: number
    instagram: string
    facebook: string
    twitter: string
    whatsapp: string
  }
  Additional: {
    id: string
    id_market: number | null
  }[]
  marketStatic: MarketStatic
}

export type MarketServerValid = RequiredProperty<MarketServerFull>
type test = IfEquals<MarketServerValid, ProfileMarket, "save", "different">
// const Test: test = "different"

export type MarketServer = Omit<
  Market,
  "id" | "id_contact" | "id_socialMedia" | "id_follow"
>
export type MarketServerFull = Market & {
  Contact: Contact | null
  SocialMedia: SocialMedia | null
  Additional: Additional[]
  // marketStatic: MarketStatic
}

export type MarketProps = Market & {
  Contact: Contact | null
  SocialMedia: SocialMedia | null
  Additional: Additional[]
  marketStatic: MarketStatic
}

export type MarketUser = Market & {
  User: User
}
export type MarketStatic = {
  follow: number
  product: number
  since: Date
  response: string
}
export type DataMarketDesc = Market & {
  Contact: Contact | null
  SocialMedia: SocialMedia | null
  Additional: Additional[]
  Transaction: Transaction[]
}

export type Remove<T> = Omit<T, "id">
