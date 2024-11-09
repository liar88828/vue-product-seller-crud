export default defineEventHandler(async (event) => {
  const data = {
    trolley: await trolleyController.push(event),
    toJson() {
      return this.trolley
    },
  }
  return data
})
