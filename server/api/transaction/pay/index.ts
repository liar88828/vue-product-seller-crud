export default defineEventHandler(async (event) => {
  const data = {
    order: await orderController.userPay(event),
    toJson() {
      return { order: this.order }
    },
  }

  return data
})
