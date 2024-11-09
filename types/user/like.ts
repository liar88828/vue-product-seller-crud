import type { Like, Product } from "@prisma/client"

export type IdLike = { id: number; id_product: number }
export type LikeProduct = Like & {
  Product: Product
}
