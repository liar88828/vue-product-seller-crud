import type {
  Contact,
  Market,
  Product,
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
  // Additional: {
  //   id: string
  //   id_market: number | null
  // }[]
  marketStatic: MarketStatic
}

export type MarketServerValid = RequiredProperty<MarketServerFullNull>
type test = IfEquals<MarketServerValid, ProfileMarket, "save", "different">
// const Test: test = "different"

export type MarketServer = Omit<
  Market,
  "id" | "id_contact" | "id_socialMedia" | "id_follow" | "id_user" | "create"
>

export type MarketClientFullNull = MarketClient & {
  Contact: Contact | null
  SocialMedia: SocialMedia | null
  // Additional: Additional[]
  // marketStatic: MarketStatic
}
export type MarketServerFullNull = Market & {
  Contact: Contact | null
  SocialMedia: SocialMedia | null
  // Additional: Additional[]
  // marketStatic: MarketStatic
}

export type MarketServerFull = Market & {
  Contact: Contact
  SocialMedia: SocialMedia
  // Additional: Additional[]
  // marketStatic: MarketStatic
}

export type MarketServerFullClient = MarketClient & {
  Contact: Contact
  SocialMedia: SocialMedia
  // Additional: Additional[]
  // marketStatic: MarketStatic
}

export type MarketClient = Omit<Market, "since"> & {
  since: string
}

export type MarketClientFull = MarketClient & {
  Contact: Contact
  SocialMedia: SocialMedia
  // Additional: Additional[]
  // marketStatic: MarketStatic
}

export type MarketProps = Market & {
  Contact: Contact | null
  SocialMedia: SocialMedia | null
  // Additional: Additional[]
  marketStatic: MarketStatic
}
export type StaticServer = {
  market: Market
  static: MarketStatic
}

export type StaticClient = {
  market: MarketClient
  static: MarketStatic
}

export type MarketStatic = {
  follow: number
  product: number
  since: Date
  response: string
}

export type MarketStaticClient = {
  follow: number
  product: number
  since: string
  response: string
}
export type DataMarketDesc = Market & {
  Contact: Contact | null
  SocialMedia: SocialMedia | null
  // Additional: Additional[]
  Transaction: Transaction[]
}

export type Remove<T> = Omit<T, "id">

export type MarketUser = Market & {
  User: User
}

export type MarketServiceSingleNull = {
  Market: Market | null
  Contact: Contact | null
  SocialMedia: SocialMedia | null
  // Additional: Additional[]
}
export type MarketServiceSingle = {
  Market: Market
  Contact: Contact
  SocialMedia: SocialMedia
  // Additional: Additional[]
}

export type MarketServiceSingleClient = {
  Market: MarketClient
  Contact: Contact
  SocialMedia: SocialMedia
  // Additional: Additional[]
}

export type UpdateSocial = Omit<MarketServiceSingle["SocialMedia"], "id">
export type UpdateContact = Omit<MarketServiceSingle["Contact"], "id">
export type UpdateMarket = Omit<
  MarketServiceSingle["Market"],
  "id" | "id_contact" | "id_socialMedia" | "id_follow"
>

export type idMarketFind = {
  id: number
}
export type ShopMarket = {
  discount: Product[]
  newProduct: Product[]
  bestProduct: Product[]
  profile: Market
}
