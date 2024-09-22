import type { ProductDetail } from "~/types/product/item"
import { prisma } from "../../config/prisma"

export class PreviewDB {
  async findUser(id: number): Promise<UserPreviewServer[]> {
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
