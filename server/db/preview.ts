import type { DataPreview } from "~/types/product/item"
import { prisma } from "../config/prisma"

export class PreviewDB {
  async findUser(id: number): Promise<DataPreview[]> {
    return prisma.preview.findMany({
      include: {
        user: true,
      },
      where: {
        id_product: id,
      },
    })
  }
}
