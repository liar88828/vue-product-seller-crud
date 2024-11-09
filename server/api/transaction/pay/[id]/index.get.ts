export default defineEventHandler(async (event) => {
  const data = {
    pay: await orderController.userPayDetail(event),
    toJson() {
      return {
        pay: this.pay,
      }
    },
  }
  return data
})
