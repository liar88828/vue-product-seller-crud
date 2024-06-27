export default defineEventHandler(async (event) => {

  const data = {
	order: control.user.trans.delete(event),
	toJson() {
	  return this.order
	},
  }
  return data
})
