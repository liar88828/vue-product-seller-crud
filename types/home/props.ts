import type { Product } from "@prisma/client"
import type { AdvProps } from "../product/grid"
import type { ItemIcons } from "../globals/icon"

export type HomeApi = {
  trending: Product[]
  newProduct: Product[]
  bestProduct: Product[]
}

export type HomeProps = {
  category: ItemIcons[]
  adv: AdvProps
  adv2: AdvProps
  bestSellers: Product[]
  trending: Product[]
  newProducts: Product[]
}
