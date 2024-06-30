export default defineEventHandler(async (event) => {
  const data = {
    data: await control.user(event).delete(),
    toJson() {
      return this.data
    },
  }
  return data
})
