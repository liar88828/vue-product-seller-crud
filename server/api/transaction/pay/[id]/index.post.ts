// can see
// get by session user

//
export default defineEventHandler(async (event) => {
  const data = {
    order: await orderController.userPay(event),
    toJson() {
      return this.order
    },
  }
  return data
})
