export default defineEventHandler(async (event) => {
  const { loggedInAt } = await getUserSession(event)
  if (loggedInAt) {
	return 'You was logged'
  }
  const data = {
	data: await control.auth.signUp(await readBody(event)),
	async toJson() {
	  return this.data
	},
  }
  return data
})
