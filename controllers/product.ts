import type { ControlCreateProduct } from "~/types/ReturnCreateProduct"

export class ProductController {
  sanitize(data: ControlCreateProduct): ControlCreateProduct {
    return {
      name: data.name,
      price: data.price,
      stock: data.stock,
      brand: data.brand,
      supplierId: data.supplierId,
      typeId: data.typeId,
    }
  }
}
