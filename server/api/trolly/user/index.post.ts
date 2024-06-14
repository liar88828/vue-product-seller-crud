import type { Box, Package, User } from "@prisma/client"

type Body = {
  boxTrolly: {
    box: Box[]
  }
  // user:User
}
export default defineEventHandler<{ body: Body }>(async (event) => {
  const session = await db.user.first()
  const body = await readBody(event)
  const Transaction = await prisma.transaction.create({
    data: {
      id_user: session.id,
      drop_address: session.address,
      id_status: "Pending",
    },
  })
  const savePackage: Package[] = body.boxTrolly.box.map((item) => {
    return {
      id: item.id,
      id_product: item.id_product,
      price: item.price,
      qty: item.qty,
      id_transaction: Transaction.id,
    }
  })

  const packageProduct = await prisma.package.createMany({
    data: savePackage,
  })

  return { packageProduct, Transaction }
})
