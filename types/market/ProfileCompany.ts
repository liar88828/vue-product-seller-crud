import type { Additional, Company, Contact, SocialMedia } from "@prisma/client"
import type { MarketStatic } from "../profile/profile"

export type ProfileCompany = {
  name: string
  industry: string
  address: string
  description: string
  mission: string
  vision: string
  history: string
  contact: {
    email: string
    phone: string
    website: string
  }
  socialMedia: {
    instagram: string
    facebook: string
    twitter: string
    whatsapp: string
  }
  additional: string[]
  marketStatic: MarketStatic
}

export type CompanyServer = Omit<
  Company,
  "id" | "id_contact" | "id_socialMedia" | "id_follow"
>
export type CompanyServerUtil = Company & {
  Contact: Contact | null
  SocialMedia: SocialMedia | null
  Additional: Additional[]
}

export type MarketIdProductId = {
  id_company: number
  id_product: number
}
