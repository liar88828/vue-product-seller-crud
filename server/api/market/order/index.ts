export default defineEventHandler(async (event) => {
  // confirm: await db.trans.market.allDetail(Number(id)),
  const data = {
    orders: await orderController.marketOrderAll(event),
    toJson(): { orders: TransServer[] } {
      return { orders: this.orders }
    },
  }
  return data
})
