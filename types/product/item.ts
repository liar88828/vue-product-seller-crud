import { type Product } from "@prisma/client"
// id: string
// name: string | null
// description: string | null
// image: string | null
// brand: string | null
// stock: number
// price: number
// userId: string | null
// typeId: string | null

export type ProductItem = Product & {
  desc: string[]
  desc_spec: DataSpec[]
  desc_tech: DataTech[]
}

export type DataTech = { title: string; text: string }
export type DataSpec = {
  title: string
  list: string[]
}
