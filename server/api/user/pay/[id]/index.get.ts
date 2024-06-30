export default defineEventHandler(async (event) => {
  const data = {
    pay: await control.user(event).trans.order.payDetail(),
    toJson() {
      return this.pay
    },
  }
  return data
})
