import { prisma } from "~/server/config/prisma"
import type { Pagination } from "~/types/globals/Pagination"
import type { DeleteDataDB } from "../../types/product/findId"
import type { ControlCreateProduct } from "~/types/user/ReturnCreateProduct"
import type { Product } from "@prisma/client"
import type { ProductItemServer } from "~/types/product/item"

class ProductMutation {
  async delete({ id, id_user }: DeleteDataDB) {
    return prisma.product.delete({
      where: {
        id,
        id_user,
      },
    })
  }
  async create(data: Product) {
    return prisma.product.create({ data })
  }

  async update(data: ControlCreateProduct, id: number) {
    return prisma.product.update({ where: { id }, data: data })
  }
}

export class ProductDB extends ProductMutation {
  async findAll({ page, search }: Pagination) {
    return prisma.product.findMany({
      where: {
        id_type: search,
      },
      take: 100,
      skip: page * 100,
    })
  }

  async findTest() {
    const product: Product[] = await prisma.product.findMany({
      take: 100,
    })
    return product
  }

  async findId(id: number) {
    return prisma.product.findUnique({
      where: { id },
    })
  }
  async counts(id: number) {
    return prisma.product.count({
      where: { id },
    })
  }

  async findFull(id: number) {
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
      include: { Spec: true, Tech: true, Desc: true, Img: true },
    })
    return product as ProductItemServer
  }
  async myProduct({ id_user, page, search }: Pagination) {
    return prisma.product.findMany({
      where: {
        id_user: id_user,
        id_type: search,
      },
      take: 100,
      skip: page * 100,
    })
  }
}
