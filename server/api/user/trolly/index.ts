import type { TrollyAllService } from "~/types/transaction/trolly"

export default defineEventHandler(async (event) => {
  const data = {
    trolly: await control.trolly.all(event),
    toJson(): { trolleys: TollyProps[] } {
      return {
        trolleys: this.trolly,
      }
    },
  }

  return data
})
