import getZod from "~/utils/getZod"
import { tryCatch } from "../lib/tryCatch"
import type { Company } from "@prisma/client"
import { CompanyServer } from "~/types/market/ProfileCompany"

export class MarketController {
  async profileUser(id_user: string) {
    return tryCatch(async () => {
      id_user = getZod.idString.parse(id_user)
      const company = await db.company.findUser(id_user)
      return company
    })
  }
  async profileId(id: number) {
    return tryCatch(async () => {
      id = getZod.idNumber.parse(id)
      const company = await db.company.findId(id)
      return company
    })
  }

  async create(id_user: string, data: CompanyServer) {
    return tryCatch(async () => {
      id_user = getZod.idString.parse(id_user)
      const sanitize = service.sanitize.companyCreate(data, id_user)
      const dataValid = getZod.companyCreateSchema.parse(sanitize)
      const company = await db.company.create(dataValid)
      return company
    })
  }
}
