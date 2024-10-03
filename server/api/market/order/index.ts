export default defineEventHandler(async (event) => {
  // confirm: await db.trans.market.allDetail(Number(id)),
  const data = {
    confirms: await orderController.marketOrderFindAll(event),
    toJson(): TransServer[] {
      return this.confirms
    },
  }
  return data
})
