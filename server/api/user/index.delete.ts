export default defineEventHandler(async (event) => {
  const data = {
	data: await control.user.delete(event),
	toJson() {
	  return this.data
	},
  }
  return data
})
