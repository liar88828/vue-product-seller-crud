export default defineEventHandler(async (event) => {
  const data = {
    pay: await control.trans.user.payDetail(event),
    toJson() {
      return this.pay
    },
  }
  return data
})
