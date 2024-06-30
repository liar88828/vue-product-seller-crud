export default defineEventHandler(async (event) => {
  const data = {
    trolly: await control.user(event).trolly.notify(),
    toJson(): { notify: number } {
      return {
        notify: this.trolly,
      }
    },
  }

  return data
})
