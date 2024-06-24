export default defineEventHandler(async (event) => {
  const data = {
    trolly: await control.trolly.notify(event),
    toJson(): { notify: number } {
      return {
        notify: this.trolly,
      }
    },
  }

  return data
})
