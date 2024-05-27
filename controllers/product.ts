import type { ControlCreateProduct } from "~/types/user/ReturnCreateProduct"

export class ProductController {
  sanitize(data: ControlCreateProduct): ControlCreateProduct {
    return {
      name: data.name,
      price: data.price,
      stock: data.stock,
      brand: data.brand,
      userId: data.userId,
      typeId: data.typeId,
      description: data.description,
      image: data.image,
    }
  }
}
