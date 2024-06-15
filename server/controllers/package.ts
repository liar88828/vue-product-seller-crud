import type { Transaction, User } from "@prisma/client"
import { PackageService } from "../services/package"
import { PackageCreate } from "~/types/transaction/package"

export class PackageController {
  constructor(protected service: PackageService) {}
  async push(id_transaction: number, packages: PackageCreate) {
    const data = service.package.sanitizePackage(
      id_transaction,
      packages.boxTrolly.box
    )
    return service.package.pushPackage(data)
  }
  async checkTransaction(data: User): Promise<Transaction> {
    const sanitize = service.package.sanitizeTransaction(data)
    return service.package.checkTransaction(sanitize)
  }
}
