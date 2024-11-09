export default defineEventHandler(async (event) => {
  const data = {
    order: await orderController.userOrderId(event),
    toJson(): { order: TransactionConfirmServer } {
      return { order: this.order }
    },
  }
  return data
})
