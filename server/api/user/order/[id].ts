export default defineEventHandler(async (event) => {
  const data = {
    order: await orderController.userFindId(event),
    toJson(): TransactionConfirmServer {
      return this.order
    },
  }
  return data
})
