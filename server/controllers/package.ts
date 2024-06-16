import type { Transaction, User } from "@prisma/client"
import type { PackageService } from "../services/transaction/package"
import type { PackageCreate } from "~/types/transaction/package"

export class PackageController {
  constructor(protected service: PackageService) {}
  async push(id_transaction: number, packages: PackageCreate) {
    const data = service.package.sanitize({ id_transaction, box: packages.box })
    return service.package.pushPackage(data)
  }
  async create(data: User): Promise<Transaction> {
    const sanitize = service.transaction.sanitize(data)
    return service.transaction.create(sanitize)
  }
}
