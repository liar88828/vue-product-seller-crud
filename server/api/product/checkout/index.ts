import type { TrollyAllService } from "~/types/transaction/trolly"

export default defineEventHandler(async (event) => {
  const data = {
    trolly: await control.user(event).product.trolly._all(),
    toJson(): { trolleys: TrollyAllService } {
      return {
        trolleys: this.trolly,
      }
    },
  }

  return data
})
