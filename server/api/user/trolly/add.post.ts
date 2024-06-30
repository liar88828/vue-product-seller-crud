import type { BoxCreate } from "~/types/transaction/trolly"

export default defineEventHandler<{ body: BoxCreate }>(async (event) => {
  const data = {
    trolly: await control.user(event).trolly.push(),
    toJson() {
      return this.trolly
    },
  }
  return data
})
