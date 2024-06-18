import type { DataPreview, ProductDetail } from "~/types/product/item"
import { prisma } from "../../config/prisma"

export class PreviewDB {
  async findUser(id: number): Promise<ProductDetail["previews"]> {
    return prisma.preview.findMany({
      include: {
        User: true,
      },
      where: {
        id_product: id,
      },
    })
  }
}
