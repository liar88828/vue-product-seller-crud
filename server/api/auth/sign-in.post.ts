export default defineEventHandler(async (event) => {
  const data = {
    data: await control.auth.signIn(await readBody(event)),
    async toJson() {
      return this.data
    },
  }
  return data
})
