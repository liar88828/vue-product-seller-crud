import type { CompanyServer, CompanyUser } from "~/types/market/ProfileCompany"

export class CompanyDB {
  async findUser(id_user: string) {
    const data = await prisma.company.findUnique({
      where: { id_user },
      include: {
        User: true,
      },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Company not found",
      })
    }
    if (!data.User) {
      throw createError({
        statusCode: 404,
        statusMessage: "User not found",
      })
    }
    data.User.password = ""
    return data
  }

  async findId(id: number) {
    const data = await prisma.company.findUnique({
      where: { id },
      include: {
        User: true,
      },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Company not found",
      })
    }
    return data
  }
  async create(data: CompanyServer) {
    const res = await prisma.company.create({
      data: data,
      include: {
        User: true,
      },
    })
    if (!res) {
      throw createError({
        statusCode: 404,
        statusMessage: "Company not found",
      })
    }
    return res
  }
}
