import type { Market } from "@prisma/client"

export async function counts(id: number) {
  return prisma.product.count({
    where: { id },
  })
}

export async function statics(
  id_product: number,
  market: Market
): Promise<MarketStatic> {
  return {
    product: await counts(id_product),
    follow: await findSelf(Number(market.id_follow)),
    since: market?.since || new Date(),
    response: "100%",
  }
}
