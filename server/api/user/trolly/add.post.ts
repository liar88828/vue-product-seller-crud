import type { BoxCreate } from "~/types/transaction/trolly"

export default defineEventHandler<{ body: BoxCreate }>(async (event) => {
  const session = await db.user.first()
  const body = await readBody(event)
  const data = {
    trolly: await control.trolly.push(session.id_trolly as number, body),
    toJson() {
      return this.trolly
    },
  }
  return data
})
