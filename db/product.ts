import { prisma } from "~/config/prisma"
import type { Pagination } from "~/types/globals/Pagination"
import type { DeleteDataDB } from "../types/product/DeleteDataDB"
import type { ControlCreateProduct } from "~/types/user/ReturnCreateProduct"

class ProductMutation {
  async delete({ id, id_user }: DeleteDataDB) {
    return prisma.product.delete({
      where: {
        id,
        userId: id_user,
      },
    })
  }
  async create(data: ControlCreateProduct) {
    return prisma.product.create({ data: data })
  }
  async update(data: ControlCreateProduct, id: string) {
    return prisma.product.update({ where: { id }, data: data })
  }
}

export class ProductDB extends ProductMutation {
  async findAll({ page, search }: Pagination) {
    return prisma.product.findMany({
      where: {
        typeId: search,
      },
      take: 100,
      skip: page * 100,
    })
  }

  async findId(id: string) {
    return prisma.product.findUnique({
      where: {
        id,
      },
    })
  }

  async myProduct({ id_user, page, search }: Pagination) {
    return prisma.product.findMany({
      where: {
        userId: id_user,
        typeId: search,
      },
      take: 100,
      skip: page * 100,
    })
  }
}
