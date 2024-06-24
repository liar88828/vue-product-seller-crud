import type { BoxCreate } from "~/types/transaction/trolly"

export default defineEventHandler<{ body: BoxCreate }>(async (event) => {
  const data = {
    trolly: await control.trolly.push(event),
    toJson() {
      return this.trolly
    },
  }
  return data
})
