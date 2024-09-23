export default defineEventHandler(async (event) => {
  const data = {
    trolly: await trolleyController.push(event),
    toJson() {
      return this.trolly
    },
  }
  return data
})
