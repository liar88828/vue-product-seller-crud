export default defineEventHandler<{ body: TrolleyCreateClient }>(
  async (event) => {
    const data = {
      trolly: await trolleyController.push(event),
      toJson() {
        return this.trolly
      },
    }
    return data
  }
)
