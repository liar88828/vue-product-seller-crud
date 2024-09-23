export default defineEventHandler<{ body: TrolleyCreate }>(async (event) => {
  const data = {
    trolly: await trolleyController.push(event),
    toJson() {
      return this.trolly
    },
  }
  return data
})
