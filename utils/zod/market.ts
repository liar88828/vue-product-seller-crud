import { ZodType, z } from "zod"
import type {
  UpdateSocial,
  MarketServer,
  UpdateMarket,
  UpdateContact,
} from "~/types/market/ProfileCompany"

const create = z.object({
  name: z.string(),
  industry: z.string(),
  address: z.string(),
  description: z.string(),
  mission: z.string(),
  vision: z.string(),
  history: z.string(),
  since: z.date(),
  user_Id: z.string().uuid(),
}) satisfies ZodType<MarketServer>

const social = z.object({
  facebook: z.string().max(50),
  instagram: z.string().max(50),
  whatsapp: z.string().max(50),
  twitter: z.string().max(50),
}) satisfies ZodType<UpdateSocial>

const market = z.object({
  // id_contact: z.number().max(50),
  // id_socialMedia: z.number().max(50),
  // id_follow: z.number().max(50),
  name: z.string().max(50),
  industry: z.string().max(50),
  address: z.string().max(50),
  description: z.string().max(50),
  mission: z.string().max(50),
  vision: z.string().max(50),
  history: z.string().max(50),
  since: z.date().max(new Date()),
  id_user: z.string().uuid(),
}) satisfies ZodType<UpdateMarket>

const contact = z.object({
  email: z.string().max(50),
  phone: z.string().max(50),
  website: z.string().max(50),
}) satisfies ZodType<UpdateContact>

export const zodMarket = {
  create,
  social,
  market,
  contact,
}
