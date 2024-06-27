export default defineEventHandler(async (event) => {
  const data = {
	orders: await control.user.trans.order.all(event),
	toJson(): { orders: TransProps[] } {
	  return {
		orders: this.orders
	  }
	},
  }
  return data
})
