import zods from "~/utils/zods"
import { tryCatch } from "../lib/tryCatch"
import type {
  CompanyServer,
  CompanyServerFull,
  CompanyUser,
} from "~/types/market/ProfileCompany"

export class MarketController {
  async profileUser(id_user: string): Promise<CompanyServerFull> {
    return tryCatch(async () => {
      id_user = zods.idString.parse(id_user)
      const company = await db.company.findUser(id_user)
      return company
    })
  }
  async profileId(id: number) {
    return tryCatch(async () => {
      id = zods.idNumber.parse(id)
      const company = await db.company.findId(id)
      return company
    })
  }

  async create(id_user: string, data: CompanyServer) {
    return tryCatch(async () => {
      id_user = zods.idString.parse(id_user)
      const sanitize = service.sanitize.companyCreate(data, id_user)
      const dataValid = zods.companyCreate.parse(sanitize)
      const company = await db.company.create(dataValid)
      return company
    })
  }
}
