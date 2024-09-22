export default defineEventHandler(async (event) => {
  const data = {
    notify: await trolleyController.notify(event),
    toJson(): { notify: number } {
      return {
        notify: this.notify,
      }
    },
  }

  return data
})
