import type { Product } from "@prisma/client"

export type ControlCreateProduct = Omit<Product, "id">
