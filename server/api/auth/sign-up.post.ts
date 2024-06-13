export default defineEventHandler(async (event) => {
  const data = {
    data: await control.auth.signUp(await readBody(event)),
    async toJson() {
      return this.data
    },
  }
  return data
})
