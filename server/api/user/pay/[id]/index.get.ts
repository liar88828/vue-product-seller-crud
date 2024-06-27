export default defineEventHandler(async (event) => {
  const data = {
	pay: await control.user.trans.order.payDetail(event),
	toJson() {
	  return this.pay
	},
  }
  return data
})
