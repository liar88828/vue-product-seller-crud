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
}
export type MarketStatic = {
  follow: number
  product: number
  since: string
  response: string
}
