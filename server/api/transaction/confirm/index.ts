import { confirmController } from "~/server/controllers/confirm.controller"

export default defineEventHandler(async (event) => {
  // confirm: await db.trans.market.allDetail(Number(id)),
  const data = {
    confirms: await confirmController.all(event),
    toJson(): { confirms: DataMarket[] } {
      return {
        confirms: this.confirms,
      }
    },
  }
  return data
})
