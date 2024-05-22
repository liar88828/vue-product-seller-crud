import type { Product } from "@prisma/client"
export type ProductItem = {
  id: string
  name: string | null
  description: string | null
  image: string | null
  brand: string | null
  stock: number
  price: number
  userId: string | null
  typeId: string | null
  spec_prod?: {
    type: string
    list: string[]
  }[]
  spec_good?: string[]
}
