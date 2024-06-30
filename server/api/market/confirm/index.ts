export default defineEventHandler(async (event) => {
  // confirm: await db.trans.market.allDetail(Number(id)),
  const data = {
    confirms: await control.market(event).owner.trans.order.all(),
    toJson() {
      return {
        confirms: this.confirms,
      }
    },
  }
  return data
})
