export default defineEventHandler(async (event) => {
  const data = {
    orders: await orderController.all(event),
    toJson(): { orders: TransServer[] } {
      return {
        orders: this.orders,
      }
    },
  }
  return data
})
