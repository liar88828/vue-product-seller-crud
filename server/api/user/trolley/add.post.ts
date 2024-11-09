export default defineEventHandler(async (event) => {
  const data = {
    trolley: await trolleyController.add(event),
    toJson() {
      return this.trolley
    },
  }
  return data
})
