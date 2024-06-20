import type { TrollyAllService } from "~/types/transaction/trolly"

export default defineEventHandler(async (event) => {
  const { session } = await getUserSession(event)

  const data = {
    trolly: await control.trolly.all(session.id,session.id_trolly, ),
    toJson(): { trolleys: TrollyAllService } {
      return {
        trolleys: this.trolly,
      }
    },
  }

  return data
})
