// can see
// get by session user
//
export default defineEventHandler(async (event) => {
  const data = {
	order: await control.user.trans.order.pay(event),
	toJson() {
	  return this.order
	},
  }
  return data
})
