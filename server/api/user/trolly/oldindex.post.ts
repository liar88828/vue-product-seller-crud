import type { CreateBox } from "~/types/market/order"

export default defineEventHandler<{ body: CreateBox }>(async (event) => {
  const { session } =  await getUserSession(event)
  const body = await readBody(event)
  // const Transaction = await control.transaction.create(body)
  // const packages = await control.box.push()
  return "is not ready"
})
