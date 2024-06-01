import { type Product } from "@prisma/client"
export type ProductItem = Product & {
  // id: string
  // name: string | null
  // description: string | null
  // image: string | null
  // brand: string | null
  // stock: number
  // price: number
  // userId: string | null
  // typeId: string | null

  desc: string[]
  desc_spec: DataSpec[]
  desc_tech: DataTechnicalSpec[]
}

export type DataTechnicalSpec = { title: string; text: string }
export type DataSpec = {
  title: string
  list: string[]
}
