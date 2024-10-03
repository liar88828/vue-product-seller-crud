export default defineEventHandler(async (event) => {
  const data = {
    orders: await orderController.userFindAll(event),
    toJson(): { orders: HistoryServer[] } {
      return {
        orders: this.orders,
      }
    },
  }
  return data
})
