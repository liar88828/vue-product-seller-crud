import type { Market } from "@prisma/client"
import type {
  MarketRegisterClient,
  MarketRegisterServer,
} from "~/types/market/ProfileCompany"
import { prisma } from "~/server/config/prisma"

export const testUser: SignUpProps = {
  // address: "jl. jakarta no. 1",
  name: "testMarket",
  email: "testMarket@gmail.com",
  // phone: "01234567890",
  password: "12345678",
  confPass: "12345678",
}

export const marketExample: MarketRegisterServer = {
  name: "Global Trade Hub",
  address: "123 Commerce Street, New York, NY 10001, USA",
  industry: "E-commerce",
  description:
    "A leading global marketplace for small to medium-sized businesses.",
  mission:
    "To empower businesses by providing a platform to sell and grow globally.",
  vision:
    "To be the most customer-centric marketplace, providing the best value to both sellers and buyers.",
  history:
    "Founded in 2010, Global Trade Hub started as a small online marketplace focused on local sellers. Over the years, it expanded its reach to international markets, becoming a trusted platform for global trade.",
  since: new Date("2010-05-15"),
  id_user: "",
}

export async function deleteMarket(market: Pick<Market, "id">) {
  if (!market) return null
  await prisma.market.delete({ where: { id: market.id } })
}
export async function findMarket(found: SessionUser) {
  return await prisma.market.findUnique({
    where: { id_user: found?.id },
  })
}

export async function beforeTestMarket(found: SessionUser) {
  const market = await findMarket(found)
  if (market !== null) {
    await deleteMarket(market)
  }
}
