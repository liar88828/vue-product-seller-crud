export default defineEventHandler(async (event) => {
  // confirm: await db.trans.market.allDetail(Number(id)),
  const data = {
    confirms: await control.market.owner.trans.order.all(event),
    toJson() {
      return {
        confirms: this.confirms,
      }
    },
  }
  return data
})
