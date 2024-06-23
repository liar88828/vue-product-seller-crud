export default defineEventHandler(async (event) => {

  const data = {
	data: await control.auth.signUp(event),
	async toJson() {
	  return this.data
	},
  }
  return data
})
