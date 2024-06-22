import { ZodType, z } from "zod"
import type { MarketServer } from "~/types/market/ProfileCompany"

const create = z.object({
  name: z.string(),
  industry: z.string(),
  address: z.string(),
  description: z.string(),
  mission: z.string(),
  vision: z.string(),
  history: z.string(),
  since: z.date(),
}) satisfies ZodType<MarketServer>

export const zodMarket = {
  create,
}
