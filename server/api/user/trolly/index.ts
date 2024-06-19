import type { Product } from "@prisma/client"
import type { TrollyAllService } from "~/types/transaction/trolly"

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const session = await db.user.first()
  const data = {
    trolly: await control.trolly.all(id, session.id),
    toJson(): { trolleys: TrollyAllService } {
      return {
        trolleys: this.trolly,
      }
    },
  }

  return data
})
