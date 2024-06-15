import type { PackageCreate } from "~/types/transaction/package"

export default defineEventHandler<{ body: PackageCreate }>(async (event) => {
  const session = await db.user.first()
  const body = await readBody(event)
  const Transaction = await control.package.checkTransaction(session)
  const packages = await control.package.push(Transaction.id, body)
  return { packages, Transaction }
})
