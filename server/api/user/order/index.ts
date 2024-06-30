export default defineEventHandler(async (event) => {
  const data = {
    orders: await control.user(event).trans.order.all(),
    toJson(): { orders: TransProps[] } {
      return {
        orders: this.orders,
      }
    },
  }
  return data
})
