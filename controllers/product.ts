import type { ControlCreateProduct } from "~/types/ReturnCreateProduct"

export class ProductController {
  sanitize(data: ControlCreateProduct): ControlCreateProduct {
    return {
      name: data.name,
      price: data.price,
      stock: data.stock,
      brand: data.brand,
      userId: data.userId,
      typeId: data.typeId,
    }
  }
}
