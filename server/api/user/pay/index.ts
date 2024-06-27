export default defineEventHandler(async (event) => {

  const data = {
	order: await control.user.trans.order.pay(event),
	toJson() {
	  return { order: this.order }
	}
  }

  return data
})
